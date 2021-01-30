#!/bin/sh
git add .
echo "Please enter a message for the commit"
read message
git commit -m "$message"
git push origin main
