FROM node:10.1.0
COPY . .
RUN yarn build
WORKDIR ./server
EXPOSE 8080
CMD node server.js