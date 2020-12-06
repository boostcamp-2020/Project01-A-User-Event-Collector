FROM node:12.18.3
RUN adduser --disabled-password --gecos '' jenkins

USER jenkins

MAINTAINER marullo Cho <marulloc0214@gmail.com>
RUN whoami
RUN mkdir -p /nextServer

WORKDIR /nextServer

ADD . /nextServer

RUN npm install && npm run build

ENV NODE_ENV production

EXPOSE 3000

CMD ["npm","start"]