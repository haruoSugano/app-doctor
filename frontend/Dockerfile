FROM node

WORKDIR /usr/app/frontend

COPY package.json /usr/app/frontend/

RUN npm install -g @angular/cli

RUN npm install

COPY . /usr/app/frontend

EXPOSE 4200

CMD ["npm", "run", "start"]
