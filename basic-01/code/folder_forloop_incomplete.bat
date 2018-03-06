@echo off
setlocal EnableDelayedExpansion  

if [%1] ==[] echo. & echo Missing folder prefix & echo.  & goto :exit
 
set root=test

set dirPrefix=%1


echo %dirPrefix%
md %root%

for %%i in (1,2,3,4) do (
    set dirName=%dirPrefix%%%i

    for %%j in (1,2,3,4) do (
        if %%j leq %%i (
            set sdirPrefix=%dirPrefix%%%i%%j
            md "!root!/!dirName!/!sdirPrefix!"            
        )
    ) 
)

echo. & echo  Done !

:exit
    pause

endlocal DisableDelayedExpansion



