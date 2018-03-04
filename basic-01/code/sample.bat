@echo off

REM comments ...

if [%1]==[] echo this is null  && goto :exit

set p1=%1

if %p1% geq 2 (
 echo %p1% is larger than 2 
 echo ....
)

if %p1% LSS 2 echo %p1% is less than 2

for %%1 in (1,2,3) do (
 echo number: %%1 
)

:exit 
  echo app closing...

