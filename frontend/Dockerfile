FROM node:12.18.3

USER root

MAINTAINER marullo Cho <marulloc0214@gmail.com>
RUN mkdir -p /nextServer

WORKDIR /nextServer
ADD . /nextServer

RUN npm install

ENV NODE_ENV production
ENV API_URL http://localhost
ENV API_PORT 3000

RUN npm run build

EXPOSE 3000

CMD ["npm","start"]