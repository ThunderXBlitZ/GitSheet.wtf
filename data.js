var data = [
    {
        header: "WORKFLOW.",
        records: [
            ["git checkout <i>master</i>", "Always start from master branch."],
            ["git pull", "Update your local Git repository with any changes from remote."],
            ["git checkout -b <i>branch_name</i>", "Create local feature branch."],
            ["git add <i>file_name</i>", "Stage a file."],
            ["git commit -m <i>commit_name</i>", "Make a new commit."],
            ["git push origin <i>branch_name</i>", "Push branch to remote (for code review and merge)."],
            ["git checkout <i>master</i>", "Alternatively, merge to local master branch and push to remote."],
            ["git merge <i>branch_name</i>", "Merge local feature branch to local master branch."],
            ["git push", "Push master branch to remote."]
        ]
    },
    {
        header: "TROUBLESHOOT.",
        records: [
            ["git status", "View currently staged, modified and untracked files."],
            ["git commit --amend --no-edit", "Modify current commit."],
            ["git rebase <i>master</i>", "Rebase your local branch with changes in the local master branch."],
            ["git rebase -i HEAD~<i>3</i>", "Interactive rebase for the last 3 commits."],
            ["git reset HEAD~1", "Reset latest commit (file changes become unstaged)."],
            ["git reset HEAD~1 --hard", "Reset latest commit as well as remove all file changes <b>CAUTION</b>."],
            ["git restore <i>filename</i>", "Reset current changes to a file <b>CAUTION!</b>."],
            ["git reset [--hard] <commit-before-merge>", "Reset to a commit before a merge."],
            ["git revert -m 1 <merge-commit-hash>", "Revert a merge commit."],
            ["git cherry-pick <i>commit_hash<i>", "Apply the changes introduced by an existing commit."],
        ]
    },
    {
        header: "BRANCHES.",
        records: [
            ["git branch", "List all local branches."],
            ["git branch -a", "List remote and local branches."],
            ["git checkout -b <i>branch_name</i>", "Create a local branch and switch to it."],
            ["git checkout <i>branch_name</i>", "Switch to an existing branch."],
            ["git push <i>origin</i> <i>branch_name</i>", "Push branch to remote."],
            ["git branch -m <i>new_name</i>", "Rename current branch."],
            ["git branch -d <i>branch_name</i>", "Delete a local branch."],
            ["git push -d  <i>origin</i> <i>branch_name</i>", "Delete a remote branch."]
        ]
    },
    {
        header: "LOGS.",
        records: [
            ["git log --oneline", "Show commit history in single lines."],
            ["git log -2", "Show commit history for last N commits."],
            ["git log -p -2", "Show commit history for last N commits with diff."],
            ["git diff", "Show all local file changes in the working tree."],
            ["git diff <i>filename</i>", "Show changes made to a file."],
            ["git blame <i>filename</i>", "Show who changed what & when in a file."],
            ["git remote show <i>origin</i>", "Show remote branches and their mapping to local."]
        ]
    },
    {
        header: "CLEANUP.",
        records: [
            ["git clean -f", "Delete all untracked files."],
            ["git clean -df", "Delete all untracked files and directories."],
            ["git checkout -- .", "Undo local modifications to all files."],
            ["git reset HEAD <i>filename</i>", "Unstage a file."]
        ]
    },
    {
        header: "STASHES.",
        records: [
            ["git stash", "Save existing changes to a stash."],
            ["git stash pop", "Apply a stash and delete it from stash list."],
            ["git stash save '<i>stash name</i>' && git stash", "Save changes to a named stash."],
            ["git stash list", "List all stashes."],
        
        ]
    },
    {
        header: "TAGS.",
        records: [
            ["git pull --tags", "Get remote tags."],
            ["git checkout <i>tag_name</i>", "Switch to an existing tag."],
            ["git tag", "List all tags."],
            ["git tag -a <i>tag_name</i> -m '<i>tag message</i>'", "Create a new tag."],
            ["git push --tags", "Push all tags to remote repo."]
        ]
    }
];

window.data = data;