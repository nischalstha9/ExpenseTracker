# Dockerfile

FROM python:3.8.3-alpine

# set environment variables
ENV PYTHONDONTWRITEBYTECODE 1
ENV PYTHONUNBUFFERED 1

# install psycopg2 dependencies
RUN apk update 
RUN apk add postgresql-dev python3-dev musl-dev build-base py-pip jpeg-dev zlib-dev libffi-dev
RUN apk add --update --no-cache g++ libxslt-dev

RUN pip install --upgrade pip
# copy source and install dependencies
RUN mkdir -p /opt/app
RUN mkdir -p /opt/app/backend
WORKDIR /opt/app/backend
ADD ./requirements.txt .
RUN pip3 install -r requirements.txt
COPY . .