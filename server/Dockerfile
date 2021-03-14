FROM node:12-alpine

WORKDIR /usr/src/app/

COPY /server/package*.json ./server/

COPY /common/interfaces.ts ./common/

WORKDIR /usr/src/app/server/

RUN npm install

EXPOSE 3080

CMD ["npm", "run", "start:dev"]