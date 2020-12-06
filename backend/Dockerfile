FROM node:12.18.3
USER root

MAINTAINER marullo Cho <marulloc0214@gmail.com>

RUN mkdir -p /expressServer
WORKDIR /expressServer
ADD . /expressServer

RUN npm install
ENV NODE_ENV production
ENV DATABASE_URL "mysql://J190:sprint@49.50.172.98:3306/VIBE"
RUN npx prisma generate

EXPOSE 4000