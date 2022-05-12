FROM node:16-buster-slim

ENV TZ=America/Sao_Paulo
RUN ln -snf /usr/share/zoneinfo/$TZ /etc/localtime && echo $TZ > /etc/timezone

WORKDIR /usr/app

COPY package*.json ./

RUN apt-get update && \
    npm install && \
    npm i -g nodemon

COPY . .

CMD ["nodemon", "--legacy-watch", "index.js"]