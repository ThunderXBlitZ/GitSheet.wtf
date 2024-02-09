var data = [
    {
        header: "WORKFLOW.",
        records: [
            ["git checkout master", "Always start from master branch."],
            ["git pull", "Update your local Git repository with any changes from remote."],
            ["git checkout -b branch_name", "Create local feature branch."],
            ["git add file_name", "Stage a file."],
            ["git commit -m commit_name", "Make a new commit"],
            ["git push origin branch_name", "Push branch to remote (for code review and merge)."],
            ["git checkout master", "Alternatively, merge to local master branch and push to remote."],
            ["git merge branch_name", "Merge local feature branch to local master branch"],
            ["git push", "Push master branch to remote"]
        ]
    },
    {
        header: "TROUBLESHOOT.",
        records: [
            ["git status", "View currently staged, modified and untracked files."],
            ["git commit --amend --no-edit", "Modify current commit."],
            ["git rebase master", "Rebase your local branch with changes in the local master branch"],
            ["git reset HEAD~1", "Reset latest commit (file changes become unstaged)."],
            ["git reset HEAD~1 --hard", "Reset latest commit as well as remove all file changes (CAUTION!)."],
            ["git restore <filename>", "Reset current changes to a file (CAUTION!)."],
            ["git reset [--hard] <commit-before-merge>", "Reset to a commit before a merge."],
            ["git revert -m 1 <merge-commit-hash>", "Revert a merge commit."]
        ]
    },
    {
        header: "BRANCHES.",
        records: [
            ["git branch", "List all local branches."],
            ["git branch -a", "List remote and local branches."],
            ["git checkout -b branch_name", "Create a local branch and switch to it."],
            ["git checkout branch_name", "Switch to an existing branch."],
            ["git push origin branch_name", "Push branch to remote."],
            ["git branch -m new_name", "Rename current branch."],
            ["git branch -d branch_name", "Delete a local branch."],
            ["git push origin :branch_name", "Delete a remote branch."]
        ]
    },
    {
        header: "LOGS.",
        records: [
            ["git log --oneline", "Show commit history in single lines."],
            ["git log -2", "Show commit history for last N commits."],
            ["git log -p -2", "Show commit history for last N commits with diff."],
            ["git diff", "Show all local file changes in the working tree."],
            ["git diff myfile", "Show changes made to a file."],
            ["git blame myfile", "Show who changed what & when in a file."],
            ["git remote show origin", "Show remote branches and their mapping to local."]
        ]
    },
    {
        header: "CLEANUP.",
        records: [
            ["git clean -f", "Delete all untracked files."],
            ["git clean -df", "Delete all untracked files and directories."],
            ["git checkout -- .", "Undo local modifications to all files."],
            ["git reset HEAD myfile", "Unstage a file."]
        ]
    },
    {
        header: "TAGS.",
        records: [
            ["git pull --tags", "Get remote tags."],
            ["git checkout tag_name", "Switch to an existing tag."],
            ["git tag", "List all tags."],
            ["git tag -a tag_name -m 'tag message'", "Create a new tag."],
            ["git push --tags", "Push all tags to remote repo."]
        ]
    },
    {
        header: "STASHES.",
        records: [
            ["git stash", "Save existing changes to a stash."],
            ["git stash pop", "Apply a stash and delete it from stash list."],
            ["git stash save 'stash name' && git stash", "Save changes to a named stash."],
            ["git stash list", "List all stashes."],
        
        ]
    },
];

window.data = data;