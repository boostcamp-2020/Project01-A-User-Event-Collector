FROM node:12.18.3
USER jenkins

MAINTAINER marullo Cho <marulloc0214@gmail.com>

RUN mkdir -p /nextServer

WORKDIR /nextServer

ADD . /nextServer

RUN npm install && npm run build

ENV NODE_ENV production

EXPOSE 80

CMD ["npm","start"]