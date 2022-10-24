FROM node:alpine
WORKDIR /usr/app
COPY package*.json ./usr/app
RUN npm install
RUN npm install -g nodemon
COPY . .
EXPOSE 6000
CMD npm start