@echo off
setlocal EnableDelayedExpansion 

echo CAUTION: The program will run into endless loop. Use Ctrl+C to terminate it when this happens !!!

if [%1] ==[] echo. & echo Missing folder prefix & echo.  & goto :exit

if [%2] ==[] echo. &  echo Missing file prefix & echo. && goto :exit

if [%3] ==[] echo. &  echo Missing file and folder suffix max number & echo. && goto :exit
 
set root=test

set dirPrefix=%1
set filePrefix=%2
set maxNum=%3

echo %dirPrefix%
md %root%

set dirCount=1
set subDirCount=1
set fileCount=1

echo maxNum %maxNum% 

:dir_loop    
if %dirCount%  LEQ  %maxNum% (
    echo dirCount %dirCount%
    set dirName=%dirPrefix%%dirCount%
    set subDirCount=1
    echo subDirCount %subDirCount%

    :subDir_loop
    if %subDirCount%  LEQ  %maxNum% (

        if %subDirCount% LEQ %dirCount% (
            set sdirPrefix=%dirPrefix%%dirCount%%subDirCount%
            md "!root!/!dirName!/!sdirPrefix!"

            set fileCount=1
            goto file_loop
        )
        set /a dirCount+=1
        goto dir_loop
    )
)

echo. & echo  Done !

:exit
    pause

endlocal DisableDelayedExpansion



