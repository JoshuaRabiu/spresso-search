FROM node:10.1.0
COPY . .
RUN yarn global add pm2 && yarn && yarn build
WORKDIR ./server
EXPOSE 1337
CMD pm2 start server.js --watch && pm2 logs all