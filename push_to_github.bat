@echo off
echo ==========================================
echo FAANG-Level Portfolio Auto-Pusher
echo ==========================================
echo.
echo This will forcefully push your correctly structured 
echo local code to your GitHub repository.
echo.

cd "C:\Users\Abhishek P S\.gemini\antigravity\scratch\portfolio"

echo Initializing Git...
git init

echo Adding all files with correct folder structure...
git add .

echo Committing...
git commit -m "Deploying correct folder structure"

echo Setting main branch...
git branch -M main

echo Adding remote repository...
git remote remove origin 2>nul
git remote add origin https://github.com/Gridronnn/portfolio.git

echo.
echo Pushing to GitHub! (A login popup might appear)
git push -u origin main -f

echo.
echo ==========================================
echo DONE! Check your GitHub repository now.
echo ==========================================
pause
