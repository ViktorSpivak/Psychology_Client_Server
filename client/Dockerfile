FROM node:12-alpine

WORKDIR /usr/src/app/

COPY /client/package*.json ./client/ 

COPY /common/interfaces.ts ./common/ 

WORKDIR /usr/src/app/client/

RUN npm install

EXPOSE 3000

CMD ["npm", "start"]