@echo off
cd /d c:\RIGTEQ-REPO\newedi
node fix-pdp.js > fix-output.txt 2>&1
echo DONE >> fix-output.txt
