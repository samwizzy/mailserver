FROM node:alpine
WORKDIR /app
COPY package.json /app/
COPY . /app
RUN npm i
CMD node app.js
EXPOSE 8081