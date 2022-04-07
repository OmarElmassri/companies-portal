FROM node:14-alpine AS node_builder

WORKDIR /usr/src/app

RUN npm i lerna -g --loglevel notice

COPY package.json .
RUN npm install --loglevel notice

COPY packages/companies-client ./packages/companies-client
COPY packages/companies-server ./packages/companies-server

COPY lerna.json .
RUN lerna bootstrap

CMD npm start