FROM node:12.18.3
USER jenkins

MAINTAINER marullo Cho <marulloc0214@gmail.com>

RUN mkdir -p /expressServer

WORKDIR /expressServer

ADD . /expressServer

RUN npm install

ENV NODE_ENV production

EXPOSE 4000

CMD ["npm","start"]