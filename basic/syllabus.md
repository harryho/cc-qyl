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


### Task 2: (Estimation:15min ~ 30min)
* Create batch file to rollback the folder `c:\folderA` based on `c:\folderA_backup`
* copy all txt files within `c:\folderA` to `folderA2`


### Task 3:  (Estimation:30min ~ 1hour)
* Create a batch program `file_statistic.bat` to search specific file type  and generate statistic result.
* Create a batch file which can accept two input parameters: folder path, file suffix 


### Example: 

* Run the command below
```
file_statistic.bat c:\folderA txt,log
```
* Expect result ( Table format is optional)

```
+----------+-------+
| file type| count |
+----------+-------+
| log      |   5   |
+----------+-------+
| txt      |   3   |
+----------+-------+
```


### Task 4: (optional)
* create a ES 6 app project

