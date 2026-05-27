---
name: review
description: "Review changed code in this repo against the project's review checklist (readability, maintainability, performance, security, consistency)."
---

## Context

- Current branch: !`git branch --show-current`
- Diff against base: !`git diff --stat $(git merge-base HEAD v2)..HEAD`
- Unstaged changes: !`git diff --stat`

## How to review

Read the diff, then evaluate each changed file against the categories below. Report findings as a bulleted list grouped by category. Skip categories with no findings rather than padding with "looks good".

### Readability

- Function length under ~50 lines.
- Nesting no deeper than 3–4 levels.
- Avoid `let` where `const` works. Avoid `any`.
- Extract repeated or multi-part conditions into named variables.
- Lift hard-coded values into constants.

### Maintainability

- One responsibility per function/component.
- Watch for bloated props.

### Performance

- No unnecessary re-renders or recomputation.
- Use early returns.

### Security

- Validate user input at boundaries.
- Guard against XSS and similar OWASP Top 10 issues.
- No `console.log` or debug code left in.
- No hard-coded secrets.

### Consistency

- Follow existing patterns in the codebase before introducing new ones.
- Verify the change adheres to AGENTS.md (component design principles, styling rules, code style).
