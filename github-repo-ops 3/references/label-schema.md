# Label Schema

Standard labels for OSS project issue management.

## Create All Labels

```bash
REPO=$GITHUB_REPO

# Type labels
gh label create "bug"           --repo $REPO --color "d73a4a" --description "Something isn't working" --force
gh label create "feature"       --repo $REPO --color "a2eeef" --description "New feature or enhancement" --force
gh label create "question"      --repo $REPO --color "d876e3" --description "Further information is requested" --force
gh label create "documentation" --repo $REPO --color "0075ca" --description "Improvements or additions to documentation" --force
gh label create "duplicate"     --repo $REPO --color "cfd3d7" --description "This issue or PR already exists" --force
gh label create "invalid"       --repo $REPO --color "e4e669" --description "This doesn't seem right" --force
gh label create "wontfix"       --repo $REPO --color "ffffff" --description "This will not be worked on" --force
gh label create "enhancement"   --repo $REPO --color "84b6eb" --description "Enhancement to existing feature" --force
gh label create "help wanted"   --repo $REPO --color "008672" --description "Extra attention is needed" --force
gh label create "good first issue" --repo $REPO --color "7057ff" --description "Good for newcomers" --force

# Priority labels
gh label create "P0" --repo $REPO --color "b60205" --description "Critical: crash, data loss, security" --force
gh label create "P1" --repo $REPO --color "e11d48" --description "High: major bug blocking usage" --force
gh label create "P2" --repo $REPO --color "f97316" --description "Medium: minor bug or important feature" --force
gh label create "P3" --repo $REPO --color "84cc16" --description "Low: nice to have" --force

# Status labels
gh label create "needs-repro"   --repo $REPO --color "fbca04" --description "Needs a reproduction case" --force
gh label create "needs-info"    --repo $REPO --color "fbca04" --description "More information needed" --force
gh label create "in-progress"   --repo $REPO --color "0052cc" --description "Work in progress" --force
gh label create "stale"         --repo $REPO --color "795548" --description "No activity for a long time" --force
```

## Label Decision Guide

| Situation | Labels to apply |
|-----------|----------------|
| Crash / data loss | `bug`, `P0` |
| Major functionality broken | `bug`, `P1` |
| Minor bug | `bug`, `P2` |
| New feature request | `feature`, `P2` or `P3` |
| Documentation fix | `documentation`, `P3` |
| Usage question | `question` |
| Duplicate of #N | `duplicate` |
| No repro steps provided | `needs-repro` |
| More info needed | `needs-info` |
| Good for new contributors | `good first issue`, `help wanted` |
