---
name: create-commit
description: "Stage files, generate a commit message in this repo's Conventional Commits style, and commit after user approval."
---

## Context

- Current git status: !`git status`
- Current git diff (staged and unstaged changes): !`git diff HEAD`
- Current branch: !`git branch --show-current`
- Recent commits: !`git log --oneline -10`

## General rules

- Commit messages follow [Conventional Commits](https://www.conventionalcommits.org/), and the conventions in `AGENTS.md` § _Commit messages_.
- Description: English, imperative mood (e.g. "add", not "added" / "adds"), no leading capital, no trailing period, ≤ 72 characters.
- Body (when included): English, wrap at ~72 characters, blank line after the description, explain **what / why** (not how).
- For breaking changes, add `!` after the type or type+scope (e.g. `feat!:`, `feat(Button)!:`).

## Workflow

### 1. Check changes and stage files

```bash
git status --short
```

If there are no changes at all, stop and tell the user there is nothing to commit.

If there are unstaged changes, use `AskUserQuestion` (`multiSelect: true`) to ask which files to stage:
- First option: **"Stage all"** — stages every unstaged/untracked file.
- Then list each individual unstaged/untracked file.

If files are already staged, mention them in the question text so the user knows what is already in the index.

If everything is already staged, skip to step 2.

After the selection, stage with `git add` (specific files; avoid `git add -A` / `git add .` so we don't accidentally pick up secrets or large binaries):

```bash
git add <file1> <file2> ...
```

### 2. Verify staged changes

```bash
git diff --cached --stat
```

If empty, stop and tell the user there is nothing to commit.

### 3. Analyze the diff and draft a commit message

```bash
git diff --cached
```

For large diffs (>500 lines), start with `--stat` and read key files selectively. If needed for context:
- Read the full file for new files.
- Check `git log --oneline -5` to follow recent style.

Draft a Conventional Commits message in this repo's style — see _Commit message format_ below — and **present it to the user via `AskUserQuestion` for approval**:
- Option 1: Approve.
- Option 2: Request changes (user provides feedback via "Other").

If the user requests changes, revise and ask again. **Do not run `git commit` until the user approves.**

### 4. Execute the commit

Once approved:

```bash
git commit -m "<approved description>"
```

For multi-line messages (body / footer), use a HEREDOC:

```bash
git commit -m "$(cat <<'EOF'
<type>(<scope>): <description>

<body>

<footer>
EOF
)"
```

After the commit, show the result:

```bash
git log --oneline -1
```

If a pre-commit hook fails, **fix the underlying issue and create a new commit** — do not amend or skip hooks (`--no-verify`) without explicit user approval.

## Commit message format

```
<type>(<optional scope>): <description>

<optional body>

<optional footer(s)>
```

### Type

- `feat` — new feature (e.g. a new component, a new prop)
- `fix` — bug fix
- `docs` — documentation / agent rules / skill changes
- `refactor` — code change that neither fixes a bug nor adds a feature
- `perf` — performance improvement
- `test` — adding or correcting tests
- `build` — build system / dependencies (npm, vite, tsconfig)
- `ci` — CI configuration
- `chore` — other changes that don't modify src or test files
- `style` — formatting only (Biome rarely produces these as standalone commits — most style fixes ride along with feature work)
- `revert` — reverting a previous commit

### Scope

Pick the most specific scope that applies, or omit it for cross-cutting changes:

- **Component PascalCase** when the change is to one component: `feat(ProgressIndicator)`, `refactor(Button)`, `fix(FileUpload)`.
- **Skill name (kebab-case)** when the change is to one skill: `docs(port-html-to-react)`, `docs(write-tests)`.
- **No scope** for cross-cutting changes: `docs: trim Tech stack versions to majors`.

Examples from this repo's history:

```
feat(ProgressIndicator): add pause/resume control to loop stories
refactor(ProgressIndicator): derive indeterminate state from value presence
docs(port-html-to-react): add src/index.ts re-export, drop animation pause rule
docs(review): drop the file length guideline
docs: trim Tech stack versions to majors
```

### Body

Use the body when the description alone doesn't convey the **why**. Skip it for trivial changes.

- Wrap at ~72 characters per line.
- Blank line between description and body.
- Bullet points are fine when listing multiple distinct points.

### Footer

- Reference related issues or PRs: `Closes #123`, `Refs #456`.
- Breaking changes: `BREAKING CHANGE: <description>`.
