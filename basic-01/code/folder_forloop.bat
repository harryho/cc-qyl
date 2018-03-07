@echo off
setlocal EnableDelayedExpansion  

if [%1] ==[] echo. & echo Missing folder prefix & echo.  & goto :exit

if [%2] ==[] echo. &  echo Missing file prefix & echo. && goto :exit
 
set root=test

set dirPrefix=%1
set filePrefix=%2

echo %dirPrefix%
md %root%

for %%i in (1,2,3,4) do (
    set dirName=%dirPrefix%%%i

    for %%j in (1,2,3,4) do (
        if %%j leq %%i (
            set sdirPrefix=%dirPrefix%%%i%%j
            md "!root!/!dirName!/!sdirPrefix!"
            for %%k in (1,2,3,4) do (
                if %%k leq %%i (
                    set fileName=%filePrefix%%%i%%k.txt
                    type nul >>"!root!/!dirName!/!sdirPrefix!/!fileName!"
                )
            )
        )
    ) 
)
echo. & echo  Done !

:exit
    pause

endlocal DisableDelayedExpansion



