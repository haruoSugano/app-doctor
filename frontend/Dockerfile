FROM node:alpine
WORKDIR /usr/app
COPY package*.json ./
RUN npm cache clean --force
RUN npm install
RUN npm install -g nodemon
COPY . ./usr/app
EXPOSE 4200
CMD npm start
