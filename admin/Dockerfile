FROM node:12-alpine

WORKDIR /usr/src/app/admin

COPY package*.json ./

RUN npm install

EXPOSE 3030

CMD ["npm", "start"]