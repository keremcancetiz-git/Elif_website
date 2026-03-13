---
description: Automatically stage, commit, and push all changes with a generated message.
---

// turbo-all

1. Analyze current status
```bash
git status
git diff --stat
```

2. Perform safety checks
- Verify no secrets or large binary files are being added.

3. Stage and Commit
```bash
git add .
git commit -m "[type]: Automated sync of changes

- [Detail of change 1]
- [Detail of change 2]"
```

4. Push to origin
```bash
git push
```
