---
name: github-repo-ops
description: "GitHub repository operations agent with three workflows: (1) Issue triage: fetch open issues, AI classify by type and priority, apply labels, close invalid/duplicate issues with polite comments; (2) Bug fix: read issue, locate code, make minimal fix, create branch and open PR; (3) PR status check: list open PRs, report mergeable/needs-review/conflicting/CI-failing status. Use when asked to: triage issues, classify and label issues, fix a bug from issue, submit a PR, check PR status, review open PRs, process GitHub issues, manage open source project, or any GitHub issue/PR automation task. Requires GITHUB_TOKEN env var and owner/repo from user."
---

# GitHub Repo Ops

Three workflows for GitHub repository management: **issue triage**, **bug fix**, and **PR status check**.

Always start by identifying which workflow the user wants, then execute it end-to-end.

## Setup

Ask the user for:
1. **Repo URL or `owner/repo`** — e.g. `eosphoros-ai/DB-GPT`
2. **GitHub Token** — Personal access token with `repo` scope

```bash
export GITHUB_TOKEN=ghp_xxx
export GITHUB_REPO=eosphoros-ai/DB-GPT
export GH_TOKEN=$GITHUB_TOKEN   # for gh CLI
```

Per-run limits (ask user or use defaults):
- Max issues to process: **30** (fetch latest open issues)
- Max auto-fix PRs per run: **5**
- Auto-close without confirmation: **Ask user** — default requires confirmation, but user can authorize specific conditions (see Safety Rules)

---

## Usage Examples

### Example 1 — Issue Triage

> "帮我 triage antvis/G2 最新的 30 个 issue，分类打标，关闭无效的"

1. Fetch latest 30 open issues via GitHub API
2. AI classifies each: `bug / feature / question / duplicate / invalid / wontfix` + priority `P0–P3`
3. Creates missing labels (P1/P2/P3/bug/feature/question…) in the repo
4. Applies labels to every issue in batch
5. Shows candidates for closing — **confirms with user** before acting
6. Posts a polite comment (from `references/comment-templates.md`) then closes approved ones
7. Outputs a triage report table

---

### Example 2 — Fix a Bug from Issue

> "帮我修复 eosphoros-ai/DB-GPT 的 issue #1234，本地仓库在 ~/Documents/antv/L7"

1. Fetch full issue body + comments to understand expected vs actual behavior
2. Search local repo with Grep/Glob to locate relevant files
3. Make a minimal, focused fix — no refactoring beyond the issue scope
4. Create branch: `fix/issue-<number>-<slug>`
5. Run formatter if applicable (`pnpm prettier --write .`)
6. Commit with `Fixes #<number>` in message, push branch
7. Open PR with structured description (title / changes / test plan / closes #N)
8. Non-trivial or risky fixes → open as **draft PR** and ask user to review first

---

### Example 3 — Check PR Status

> "帮我看看 antvis/G2 最近的 PR 状态"

1. Fetch open PRs with CI check status and review decisions
2. For each PR fetch commit check-runs to get CI results
3. Categorize:
   - ✅ **Ready to merge** — mergeable + CI passing + approved
   - 👀 **Needs review** — CI passing, no approval yet
   - ⚠️ **Has conflicts** — `mergeable: CONFLICTING`
   - ❌ **CI failing** — checks not passing
4. Output a structured status table with PR links, authors, branch names

---

## Pipeline

### Step 1: Fetch Open Issues

```bash
gh issue list --repo $GITHUB_REPO \
  --state open \
  --limit 30 \
  --json number,title,body,labels,author,createdAt,updatedAt,comments,url
```

For large repos, optionally filter by date:
```bash
gh issue list --repo $GITHUB_REPO --state open --limit 100 \
  --json number,title,body,labels,author,createdAt,url
```

---

### Step 2: AI Classify Each Issue

For each issue, classify:

| Type | Signal words / criteria |
|------|------------------------|
| `bug` | error, crash, broken, not working, regression, TypeError, exception |
| `feature` | add, support, implement, new feature, enhancement, request |
| `question` | how to, how do I, why does, what is, usage question |
| `documentation` | docs, typo in docs, missing docs, wrong example |
| `duplicate` | same as #N, already reported — find the original |
| `invalid` | no repro, spam, off-topic, no response >90 days, unrelated |
| `wontfix` | by design, out of scope, known limitation |

Priority:
- `P0` — crash / data loss / security
- `P1` — major bug blocking usage
- `P2` — minor bug or important feature
- `P3` — nice-to-have, cosmetic

---

### Step 3: Apply Labels

Use `github-issues` skill to apply labels. Ensure standard labels exist first:

```bash
# Create missing labels
gh label create "bug" --repo $GITHUB_REPO --color "d73a4a" --force
gh label create "feature" --repo $GITHUB_REPO --color "a2eeef" --force
gh label create "question" --repo $GITHUB_REPO --color "d876e3" --force
gh label create "documentation" --repo $GITHUB_REPO --color "0075ca" --force
gh label create "duplicate" --repo $GITHUB_REPO --color "cfd3d7" --force
gh label create "invalid" --repo $GITHUB_REPO --color "e4e669" --force
gh label create "wontfix" --repo $GITHUB_REPO --color "ffffff" --force
gh label create "P0" --repo $GITHUB_REPO --color "b60205" --force
gh label create "P1" --repo $GITHUB_REPO --color "e11d48" --force
gh label create "P2" --repo $GITHUB_REPO --color "f97316" --force
gh label create "P3" --repo $GITHUB_REPO --color "84cc16" --force

# Apply labels to issue
gh issue edit <number> --repo $GITHUB_REPO --add-label "bug,P1"
```

---

### Step 4: Close Invalid / Duplicate Issues

**Default: confirm before closing.** Show the list and ask for approval.

**User can authorize auto-close without confirmation** for specific conditions:
- Duplicate issues with clear original reference
- Issues labeled `spam`, `invalid`, or `wontfix`
- Issues with `no response > 90 days` and labeled `invalid`
- Other explicitly authorized categories (ask user)

Post a comment then close:

```bash
# For duplicate
gh issue comment <number> --repo $GITHUB_REPO \
  --body "Thanks for the report! This is a duplicate of #<original>. Please follow the discussion there. Closing to keep the tracker clean."
gh issue close <number> --repo $GITHUB_REPO --reason "not planned"

# For invalid / no response
gh issue comment <number> --repo $GITHUB_REPO \
  --body "Hi! This issue has been inactive for a long time and lacks sufficient information to reproduce. Closing for now — please reopen with reproduction steps if the problem persists."
gh issue close <number> --repo $GITHUB_REPO --reason "not planned"

# For question (answered)
gh issue comment <number> --repo $GITHUB_REPO \
  --body "<answer to question>\n\nClosing as answered. Feel free to reopen if you have follow-up questions!"
gh issue close <number> --repo $GITHUB_REPO --reason "completed"
```

See `references/comment-templates.md` for more polished templates.

---

### Step 5: Fix Bugs & Implement Features

For each fixable issue (respect `max_per_run: 5`):

1. **Read the issue** — understand expected vs actual behavior, find repro steps
2. **Locate relevant code** using Grep/Glob in the local repo
3. **Make minimal, focused fix** — no refactoring beyond the issue scope
4. **Create branch**:
   ```bash
   git checkout master && git pull origin master
   git checkout -b fix/issue-<number>-<short-slug>   # or feat/ for features
   ```
5. **Apply fix, run formatter if applicable** (`pnpm prettier --write .`)
6. **Commit**:
   ```bash
   git add <changed-files>
   git commit -m "fix: <description>

   Fixes #<number>

   Co-Authored-By: Claude <noreply@anthropic.com>"
   ```
7. **Push & create PR** via `github-issues` skill:
   ```bash
   git push origin fix/issue-<number>-<short-slug>

   gh pr create \
     --repo $GITHUB_REPO \
     --title "fix: <description>" \
     --body "## 描述
   修复 Issue #<number>

   ## 修改内容
   - \`<file>\`: <what changed>

   ## 测试
   - [ ] 单元测试通过
   - [ ] 手动验证通过

   Closes #<number>

   🤖 Generated with [Claude Code](https://claude.com/claude-code)" \
     --label "bug"
   ```

For **non-trivial or risky fixes**: open as `--draft` PR and ask user to review first.
For **features**: use `feat/issue-<number>-<slug>` branch and `--label "enhancement"`.

---

### Step 6: Check PR Status

```bash
gh pr list --repo $GITHUB_REPO --state open \
  --json number,title,mergeable,reviewDecision,statusCheckRollup,headRefName
```

Report by category:
- **Ready to merge**: mergeable + CI passing + approved
- **Needs review**: open, CI passing, no approval yet
- **Has conflicts**: `mergeable: CONFLICTING`
- **CI failing**: checks not passing

---

### Step 7: Summary Report

Output after each run:

```markdown
## OSS Maintainer Report — <repo> (<date>)

### Issue 统计
总数: N | Bug: N | Feature: N | Question: N | Invalid/Duplicate: N

### 处理结果
| # | Title | Type | Priority | Action |
|---|-------|------|----------|--------|
| 42 | Crash on null input | bug | P1 | PR #87 opened |
| 43 | How do I use X? | question | — | Answered & closed |
| 44 | Same as #40 | duplicate | — | Closed → #40 |
| 45 | Add dark mode | feature | P3 | Labeled, needs discussion |

### PR 状态
可合并: N | 需要审查: N | 有冲突: N | CI 失败: N
```

---

## Safety Rules

### Universal Rules (Always Apply)
- Never force-push to main/master
- One PR per issue — never bundle unrelated fixes
- Always post a comment before closing an issue
- Match existing code style — no refactoring beyond fix scope
- For large features: comment on issue to discuss scope before implementing

### Auto-Close Authorization (User-Configurable)

**Default behavior:** Confirm before closing any issue.

**User can authorize auto-close without confirmation** by specifying conditions:

| Condition | Example User Request |
|-----------|---------------------|
| Specific labels | "标记为 spam/invalid/duplicate 的直接关闭" |
| Clear duplicates | "找到原 issue 的 duplicate 直接关闭" |
| Stale issues | "90 天无响应且标记 invalid 的直接关闭" |
| Explicit trust | "这次可以直接关闭，无需确认" |

**Safety limits for auto-close:**
- Max 10 auto-closes per run (prevents bulk accidents)
- Always post closing comment (even when auto-closing)
- Log all auto-closed issues in the report for review

### Example: Authorized Auto-Close Workflow

```
User: "帮我 triage antvis/G2，duplicate 和 spam 的直接关闭，其他的给我确认"

AI Action:
1. 分类所有 issue
2. 标记为 duplicate/spam 的：自动评论并关闭（无需确认）
3. 其他待关闭的：列出清单等用户确认
4. 输出报告：包括自动关闭和待确认的两部分清单
```

## Reference Files

- `references/comment-templates.md` — Polished close/label/answer comment templates
- `references/label-schema.md` — Full label set with colors and descriptions
