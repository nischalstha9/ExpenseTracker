#!/bin/sh
celery -A project worker -l DEBUG
