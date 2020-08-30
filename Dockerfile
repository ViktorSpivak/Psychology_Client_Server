FROM node:12-alpine AS ui-build
WORKDIR /usr/src/app
COPY client/ ./client/
RUN cd client && npm install && npm run build

FROM node:12-alpine AS server-build
WORKDIR /root/
COPY --from=ui-build /usr/src/app/client/build ./client/build
COPY server/package*.json ./server/
RUN cd server && npm install
COPY server/server.js ./server/

EXPOSE 3080

CMD ["node", "./server/main.ts"]