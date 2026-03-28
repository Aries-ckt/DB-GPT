# Comment Templates

Use these when closing or responding to issues. Adapt tone to match the project's community culture.

---

## Duplicate

```
Thanks for the report! This appears to be a duplicate of #<original_number>.

Please follow the discussion there — feel free to add any additional context or upvote the original.
Closing this to keep the issue tracker focused.
```

---

## Invalid — Missing Reproduction Steps

```
Hi @<author>! Thanks for taking the time to file this.

To investigate further, we need a minimal reproduction. Could you provide:
- A minimal code snippet or repo that reproduces the issue
- Expected behavior vs actual behavior
- Version of `DB-GPT` you're using
- Browser/Node.js version and OS

If we don't hear back in 14 days, we'll close this to keep the tracker tidy. Feel free to reopen with the details!
```

---

## Invalid — Closing Stale / No Response

```
Hi @<author>! We haven't received a response with reproduction steps for over 90 days, so we're closing this to keep the issue tracker clean.

If you're still experiencing this problem, please reopen with a minimal reproduction. Thanks for your understanding!
```

---

## Question — Answered

```
<answer to the question>

---

Closing as answered. If you have follow-up questions, feel free to reopen or ask in our [Discussions](https://github.com/eosphoros-ai/DB-GPT/discussions).
```

---

## Wontfix

```
Thanks for the suggestion! After consideration, this is intentionally out of scope for this project because <reason>.

If this is important to you, you're welcome to fork or create a plugin/extension. Closing for now.
```

---

## Feature — Needs Discussion First

```
Thanks for this request! This is a meaningful change that needs some design discussion before implementation.

Could you share more about your use case? Specifically:
- What problem are you trying to solve?
- Have you considered any workarounds?

We'll keep this open for community discussion. PRs are welcome once there's consensus on the approach.
```

---

## Auto-fix PR Comment (on issue)

```
A fix for this issue has been submitted in PR #<pr_number>. Please review and let us know if it resolves the problem.
```
