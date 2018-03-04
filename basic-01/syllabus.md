# Basic

## Demo 

### Overview - 1
* Chrome bookmark
* Windows command
* node , npm - introduction
* ES 6 - build environment
* ES 6 - Object Oriented with JavaScript

### Section 1 -10
* Reorganize the chrome bookmark
* Add tool website to chrome bookmark
* Introduce the usage of this sites


### Section 2 - 10
* Windows command 
* bat basic programming
* sample bat program

### Section 3 - 10
* Node 
* npm  
* Node App -- Hello World
* yarn
* ES 6 - Babal
* ES 6 Environment setup

## Summary -10
* Webpack (Optional)

## Assignment

### Task 1: (Estimation:15min ~ 30min)
* Window command exercise
* Create a folder as below
```
c:\folderA
    |----folderA1
    |       |----folderA11
    |       |       |----abc.log
    |       |       |----abc.txt
    |       |       |----123.log    
    |       |----abc.log    
    |----folderA2
    |----folderA3
    |       |----folderA31
    |       |       |----abc.log      
    |       |       |----abc.txt      
    |----folderA4
            |----folderA41
                    |----abc.txt
                    |----abc.log

```
* Create a backup `c:\folderA_backup`
* copy all log files from `folderA11` to `folderA2`
* rename `123.log` within the `folder2` to `321.log`
* write "Hello World" into `321.log` and use this file to overwrite the `abc.log` within `folderA11`


### Task 2: (Estimation: 15min ~30min)
* Create batch file to rollback the folder `c:\folderA` based on `c:\folderA_backup`
* copy all txt files within `c:\folderA` to `folderA2`


### Task 3:  (Estimation:30min ~ 1hour)

* Create a batch program to create sub folders and files within the folder `test`
* The folder name and file name follows the same similar naming convention with customized prefix
* The prefix is the input parameters of the program
* Example of how to run the program and expected sub-folders and files

```
folder.bat testFolder testFile

\---test
    +---testFolder1
|   \---testFolder11
|           testFile11.txt
|
+---testFolder2
|   +---testFolder21
|   |       testFile21.txt
|   |       testFile22.txt
|   |
|   \---testFolder22
|           testFile21.txt
|           testFile22.txt
|
+---testFolder3
|   +---testFolder31
|   |       testFile31.txt
|   |       testFile32.txt
|   |       testFile33.txt
|   |
|   +---testFolder32
|   |       testFile31.txt
|   |       testFile32.txt
|   |       testFile33.txt
|   |
|   \---testFolder33
|           testFile31.txt
|           testFile32.txt
|           testFile33.txt
|
\---testFolder4
    +---testFolder41
    |       testFile41.txt
    |       testFile42.txt
    |       testFile43.txt
    |       testFile44.txt
    |
    +---testFolder42
    |       testFile41.txt
    |       testFile42.txt
    |       testFile43.txt
    |       testFile44.txt
    |
    +---testFolder43
    |       testFile41.txt
    |       testFile42.txt
    |       testFile43.txt
    |       testFile44.txt
    |
    \---testFolder44
            testFile41.txt
            testFile42.txt
            testFile43.txt
            testFile44.txt
```

---

## Following tasks are challenging ones. I don't expect you work on those tasks whole day. 
## Set a maximum time for the task every day. 


### Task 4: (Estimation: 2 day, Optional )
* create a node app to response the url as below 
    * /hi?name=Joanna

* Responese as "Welcome Joanna" with blue color


### Task 5: (Estimation: 2 day, Optional )
* create a ES 6 app project (SPA) with babel.
* The SPA is to display a table of customers on the page with search function
* Add search function to filter the customer by their first name and last name
* Add pagination to table



### Task 6:  (Estimation: 1 day,  Optional)

* Create a batch program `statistic.bat` to search specific file type  and generate statistic result.
* Create a batch file which can accept two input parameters: folder path, file suffix 


### Example: 

* Assume there is a folder `folderA` which contains sub-folders and files the same as task 1.
* Run the command below

```
statistic.bat c:\folderA txt,log
```

* Expected result ( Table format )

```
+----------+-------+
| file type| count |
+----------+-------+
| log      |   5   |
+----------+-------+
| txt      |   3   |
+----------+-------+
```


### Task 7: (optional)
* create a ES 6 app project with webpack configuration
* Add Mocha, Chai test framework

