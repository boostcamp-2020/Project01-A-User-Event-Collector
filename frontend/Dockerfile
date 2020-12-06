FROM node:12.18.3

USER root

MAINTAINER marullo Cho <marulloc0214@gmail.com>
RUN mkdir -p /nextServer
ADD . /nextServer
WORKDIR /nextServer

RUN npm install
RUN npm run build

EXPOSE 3000

CMD "npm" "start"




