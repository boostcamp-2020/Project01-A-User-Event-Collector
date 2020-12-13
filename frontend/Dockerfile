FROM node:12.18.3

USER root

MAINTAINER marullo Cho <marulloc0214@gmail.com>

RUN mkdir -p /nextServer
ADD . /nextServer
WORKDIR /nextServer

RUN npm install

ENV NEXT_PUBLIC_SERVER_DOMAIN_PRODUCTION=http://118.67.135.69:4000
ENV NEXT_PUBLIC_SERVER_DOMAIN_DEVELOP=http://localhost:4000
ENV NEXT_PUBLIC_NAVER_LOGIN_URL=https://nid.naver.com/oauth2.0/authorize?response_type=code&client_id=negoF1DsTedRqinsIjLS&redirect_uri=http://118.67.135.69:4000/api/auth/naver&state=1q2w3e4rRANDOMSTATE!
ENV API_URL=http://118.67.135.69
ENV API_PORT=4000
RUN npm run build

EXPOSE 3000

CMD "npm" "start"




