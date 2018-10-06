FROM node:10.1.0
COPY . .
CMD ["yarn global add pm2", "yarn"]
EXPOSE 1337
WORKDIR /
CMD ["yarn build", "pm2 server.js --watch"]