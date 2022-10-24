FROM node:alpine
WORKDIR /usr/app
COPY package*.json ./
RUN npm cache clean --force
RUN npm install
RUN npm install -g nodemon
RUN npm i -g sequelize-cli
COPY . ./usr/app
EXPOSE 4000
CMD npm start
