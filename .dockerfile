FROM node:16

WORKDIR /usr/src/app

COPY . .

RUN npm install

EXPOSE 3100

CMD [ "node", "server.js" ]