FROM node:20-alpine

WORKDIR /app

RUN npm i -g serve

COPY ./dist ./dist

EXPOSE 3002

CMD [ "serve", "-s", "dist", "-l", "3002" ]