FROM node:12.18.3
USER root

MAINTAINER marullo Cho <marulloc0214@gmail.com>

RUN mkdir -p /expressServer
WORKDIR /expressServer
ADD . /expressServer

ENV NODE_ENV production
RUN npm install

EXPOSE 4000

CMD npm start
