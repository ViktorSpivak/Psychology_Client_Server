FROM node:12-alpine

WORKDIR /usr/src/app/ 

COPY admin/package*.json ./admin/

COPY /common/interfaces.ts ./common/

WORKDIR /usr/src/app/admin/

RUN npm install 

EXPOSE 3000

CMD ["npm", "start"]