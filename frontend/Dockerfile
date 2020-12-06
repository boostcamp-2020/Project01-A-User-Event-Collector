FROM node:12.18.3

USER root

MAINTAINER marullo Cho <marulloc0214@gmail.com>
RUN mkdir -p /nextServer
ADD . /nextServer
WORKDIR /nextServer

RUN npm install

ENV API_URL=http://118.67.135.69
ENV API_PORT=4000
RUN npm run build

EXPOSE 3000

CMD "npm" "start"




