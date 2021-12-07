FROM node:lts-alpine

WORKDIR /server

COPY package*.json ./

RUN npm install

COPY . /server/

EXPOSE 3070

RUN ls -l

CMD [ "npm", "start" ]