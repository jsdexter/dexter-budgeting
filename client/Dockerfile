FROM node:16

WORKDIR /client

COPY package*.json ./

RUN ls -l

RUN pnpm install

COPY . /client/

RUN ls -l

EXPOSE 3000

# RUN npm ci --only=production
# ENV NODE_ENV=production

CMD [ "npm", "start" ]

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