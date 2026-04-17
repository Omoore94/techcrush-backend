//1. git init => to initialize a new git repo in your local directory/folder. Thereby converting your folder/project to a git directory.
//2. git add . OR git add {file_name} => adds changes from the working directory/local repo to the staging area. The files in this stage are in the interphase
//between your working directory and your cloud repo. They are ready to be commited.
// git commit -m "Message" => this records changes in the staging area to the repo
//git status => shows the current state of your working directories/files. It shows which files have been stageg/unstages and files that are have been modified. 
//it also shows the files that needs to be commited in your working directory.
//git log => displays the commit history, thus showing you all the commit that has been made in the directory and also the author and ID of the commits. 
//git remote add origin {repo_url} => it links your working directory to your remote repo, allowing you to subsequently push and all changes. 
//git push -u origin main/master (this depends on your branch) = > this sends commited changes from the workign directory to your remote repo. 
//susbsequent push uses the syntax => git push

//U => UNTRACKED (typically newly created files)
//T => TRACKED (Modified, staged/added, committed)
//M =>  MODIFIED
//A => ADDED (to the staging area)
//C => COMMITED
//Pnemonics => ACP: git add . , git commit, git push

//MAIN and MASTER are the defaults branches from github.

//README => this is a file that describes what your project is about, it is like the manual/handbook of your project.


//WORKING WITH REMOTE REPOSITORIES
//git pull origin master/main => fetches changes from a remote repo and merges them into your local repo/directory. 
//It is useful for keeping your local repo upto to that with remote changes. 
//git pull is like a way of staying upto date with whatever changes might have been made to a joint/collaborative remote repo

//GIT REPO STRUCTURE. 
//working directory => this is your local directory, it is where you modify files.
//staging area => it holds changes that are ready to be commited. files in this area 
//have beeen added using the git add command.
//git directory => it contains all git internal structure, they help track your working directory.



//BRANCHING AND MERGING
//A branch in gits represents an independent line of development. It allows developers to
// to isolate their work from the main codebase. Multiple branches can co-exist. Branch allows multiple
//team members to work on differeant features or fixes simultaneously without interfering with each other's work.

//types of branching
//1. feature branch => individual developer's branch. 
//2. production branch/develop branch = > test branch to confirm smooth work of the merged branches
//3. main or master branch => branch that will be released for user's interaction or market place.

//Syntax for branch creation. 
//1. git branch {branch_name} => to create a new branch
//2. git checkout -b {branch_name} => to create a branch and immediately switch to that branch. 
//NB => git branch list out all available branches in the repo
//git checkout {branch_name} => allows you to switch to a new branch.


//MERGING