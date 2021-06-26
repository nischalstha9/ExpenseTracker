#!/bin/bash
mkdir expensetracker-frontend
cd ./expensetracker-frontend
git clone git@github.com:nischalstha9/ExpenseTracker.git .
git checkout frontend
git pull origin frontend

docker-compose up --build -d
docker image prune -a --filter "until=24h" -f
exit