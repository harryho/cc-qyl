# Basic 01

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

### Task 4:  (Estimation:1 day)

* Create a batch program to create sub folders and files within the folder `test`similar to previous task
* The difference is the number of sub-folder is customzied. It is the input parameter as well 
* Example 

```
folder2.bat testFolder testFile 6

REM you will see 6 sub-folders under the folder test and every one contains sub-folders and files as task 3

\---test
        +---testFolder1
            +---....
        +---testFolder2
            +---....
        +---testFolder3
            +---....      
        +---testFolder4
            +---.... 
        +---testFolder5
            +---....
        +---testFolder6
            +---....                        

```
