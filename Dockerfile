FROM node:10.1.0
COPY . .
RUN yarn global add pm2 && yarn && yarn build
WORKDIR ./server
EXPOSE 1337
CMD PORT=1337 NODE_PORT=1337 pm2 start server.js