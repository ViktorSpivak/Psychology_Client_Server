FROM node:12-alpine

WORKDIR /usr/src/app/server

COPY package*.json ./

RUN npm install

EXPOSE 3080

CMD ["npm", "run", "start:dev"]