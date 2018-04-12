# Git 

## Demo 

### Overview - 10
* Get the environment ready on both side
* Introduction -- Tech Note, Git, Markdown

### Section 1 -10

* Create a repo (repo-000) on github 
* Use command to commit and push initial version
* Commit a program file to __master__ branch
* Introduce gitignore best practice
* commit gitignore

### Section 2 - 10
* Create a new branch (named __branch-1__) and checkout new branch
* Change the program under __branch-1__
* Commit to code to server on __branch-1__
* Checkout __master__ branch and merge __branch-1__ into __master__ branch

### Section 3 - 10
* Change the code and commit the change to __master__
* Checkout __branch-1__. Change the some program, commit and push changes to server
* Merge __master__ into __branch-1__
* Solve the conflict via Visual Studio Code or KDiff
* Commit and push __branch-1__ to server
* Rebase __branch-1__ to __master__

## Summary -10
* Git commands
* Version control
* Assignment


## Assignment

### Task 1: (Estimation: 30min ~ 1 hour)

#### Step 1
* Create a new repo: __repo-test-00__
* Clone the repo to local PC
* Setup the git account
* Create a README.md file
* Commit and push README.md as initial version
* Checkout the branch  __master__
* Create a new folder named __src__
* Copy the program files to folder src
    * Program files can be downloaded from https://github.com/harryho/cc-qyl/tree/master/git/cpde
    * Program files : myprogram.bat; test.js;  module.js;
* Commit all files to master branch 

#### Step 2
* Create a new branch named __b-001__
* Checkout branch __b-001__
* Add a comment to file test.js 
* Commit and push the change to branch __b-001__
* Merge __b-001__ into __master__ branch

#### Step 3
* Create a new branch named __b-002__
* Checkout branch __b-002__
* Replace module.js file as below.
```js
function main ( param1, param2, param3, params ) {   
   console.log( " hello ", params );
   console.log( " hello ", param3 );
   console.log( " hello ", arguments );
   if (params!==undefined && typeof params === "object" && params.length > 0  ){
       params.forEach(function(e, idx) {
            console.log( " index: ", idx, " item : ", e);
       });
   }
}
module.exports = main
``` 
* Commit and push the change to branch __b-002__


#### Step 4
* Create a new branch named __b-001__
* Checkout branch __b-001__
* Replace module.js file as below.
```js
function main ( param1,  param3, params ) {   
   console.log( " hello ", param1 );
   console.log( " hello ", params );
   console.log( " hello ", arguments );
}
module.exports = main
``` 
* Commit and push the change to branch __b-001__


#### Step 5 
* Merge __b-002__ into __b-001__ branch
* Rebase __b-001__ into __master__ branch


### Task 2: (optional)

* Run the myprogram.bat without exception or error

