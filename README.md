# signal-for-refugees

## Setting up and updating local repository (Git)

1. Fork this repository into your own GitHub account. 
1. Start up your command prompt window/shell, navigate to a desired directory in your local system and clone the forked repo by using the command `git clone https://github.com/[your-github-username]/signal-for-refugees`. This will create a copy of the remote repo for you named according to the remote repository in your desired directory.
1. For big updates involving dependencies, you will want to keep your own fork up-to-date with the main organisation repository by making a pull request from the main repo and merging the PR into your own fork, but watch out for merge conflicts.

## Making pull requests and updates to main repo (Git)
1. (OPTIONAL) Before making a change to your repo, you may want to consider creating a new branch for your new feature on your remote fork in case anything goes wrong. You'll also want to use the `git checkout [new-branch-name]` command to make sure you're on a different branch in your own local repo.
1. Once you've made an update to your own repo and are ready, first commit the changes by taking `git add .`, then `git commit -m '[Your commit message here']`.
1. Push the new changes to your own remote fork first by using `git push origin [desired-remote-branch]`, but make sure your local system is also on the correct branch. 
1. Once done, you can make a pull request from your remote fork to the main organization for code review before merging. 
