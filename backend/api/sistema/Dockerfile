FROM node

WORKDIR /usr/app/api/sistema

COPY package.json /usr/app/api/sistema

RUN npm install

COPY . /usr/app/api/sistema

EXPOSE 4000

CMD ["npm", "run", "dev"]
