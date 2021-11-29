# syntax=docker/dockerfile:1
FROM node:16 AS ui-build

WORKDIR /app

ENV PATH /app/node_modules/.bin:$PATH

COPY /client/package.json ./
COPY /client/package-lock.json ./

RUN npm install 

COPY . ./

EXPOSE 3000

CMD [ "npm", "start" ]
# ENV NODE_ENV=production

# WORKDIR /usr/src/index.js
# COPY ["client/package.json", "client/package-lock.json*", "./"]
# COPY client/package.json /my-app/client/package.json
# COPY client/package*.json ./
# RUN npm install --production
# RUN npm ci --only=production

# COPY . .
# RUN cd client && npm install && npm run build
# CMD ["node", "client/src/index.js"]

# FROM node:16 AS server-build
# WORKDIR /usr/api/server.js
# # COPY --from=ui-build /usr/src/app/my-app/build ./my-app/build
# COPY ["api/package.json", "api/package-lock.json*", "./"]
# RUN cd ../api && npm install
# COPY api/server.js ./api/

# EXPOSE 3080

# CMD ["node", "./api/server.js"]