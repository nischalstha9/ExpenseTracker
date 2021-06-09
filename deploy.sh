#!/bin/bash
pkill -f uwsgi -9
mkdir expensetracker
cd ./expensetracker
git clone https://github.com/nischalstha9/ExpenseTracker .
pipenv shell
pip install -r requirements.txt
python manage.py makemigrations
python manage.py migrate
python manage.py collectstatic --noinput
docker-compose up --build -d
docker image prune -a --filter "until=24h" -f
exit