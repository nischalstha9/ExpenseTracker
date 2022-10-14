#!/bin/bash

python3 manage.py makemigrations
python3 manage.py migrate
python3 manage.py collectstatic --noinput
uwsgi --http 0.0.0.0:8002 --auto-procname --master --module=project.wsgi:application --enable-threads --processes 4 --cheaper 2 --cheaper-step 1 --listen=100 --async 4 --harakiri 60 --max-requests 1000 --max-worker-lifetime 3600 --reload-on-rss 1024 --worker-reload-mercy 60
