# Dockerfile

FROM node:13.12.0-alpine


# copy source and install dependencies
RUN mkdir -p /opt/app
RUN mkdir -p /opt/app/frontend
WORKDIR /opt/app/frontend
COPY ./package.json .
RUN npm install
RUN npm install -g serve
COPY . .
RUN npm run build
RUN serve -s build -l 5000
