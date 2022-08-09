FROM node:lts-alpine

WORKDIR /server

COPY package*.json ./

RUN npm i -g pnpm

COPY . /server/

EXPOSE 3070

RUN ls -l

CMD [ "npm", "start" ]