<center>

# App Doctor

![Logo app-doctor](./frontend/src/assets/resources/img/logo.png)

</center>

---

<center>

## Resumo

Uma aplicação Web voltada para a criação de receituários e prontuários onde o paciente receberá também, via e-mail, o seu receituário e o seu cadastro para  acessar a aplicação e verificar suas consultas.

---

</center>

<center>

## Objetivo

Desenvolvimento de uma solução útil para clínicas médicas.

</center>

Requisitos:
* Utilizar arquitetura de microsserviços, com NodeJS;
* Dois microsserviços, com barramento de eventos e comunicação assíncrona;
* O Front End deverá ser uma aplicação Angular;
* O Front End deverá dar acesso gráfico às funcionalidades providas pelo Back End;
* A comunicação entre Back End e Front End deve ser feita via requisições HTTP.


---

<center>

## Video/Slide de apresentação

Video: [Youtube](https://www.youtube.com/watch?v=-lW5ftJ2Xpk)

Slide: [Docs](https://docs.google.com/presentation/d/1Sd5BUnJ17HVcykeJodEW_Jv3RU_oExT0gQHcOqtNyyc/edit#slide=id.g154f7c472ef_3_9)

</center>

---

<center>

## Integrantes do grupo

Alice Lucia da Silva RA: 821157071

Giovanne Henrique Vieira da Silva RA: 821149648

Hélio Haruo Takamori Sugano RA: 821137022

José Carlos Ferreira Silva Neto RA: 822159018

Kassio Mateus de Amorim RA: 82011745

Nathalia Julia Pereira RA: 820277511

Vinicius de Souza Alves RA: 820272024

</center>

---
<center>

## Requerimentos


</center>

### Obrigatório:

* NodeJS >= 14.0.0
* AngularJS 14
* PostgreSQL
* MongoDB
* RabbitMQ

### Opcional:
* Docker 
* Docker Compose

### Documentação

 Algumas bibliotecas que são utilizadas pelo gerenciador de pacote NPM.


> frontend

* [bootstrap](https://www.npmjs.com/package/bootstrap);
* [font-awesome](https://www.npmjs.com/package/font-awesome);
* [ng2-file-upload](https://www.npmjs.com/package/ng2-file-upload);
* [ng2-search-filter](https://www.npmjs.com/package/ng2-search-filter).

> login

* [nodemon](https://www.npmjs.com/package/nodemon);
* [amqplib](https://www.npmjs.com/package/amqplib);
* [bcryptjs](https://www.npmjs.com/package/bcryptjs);
* [html-pdf](https://www.npmjs.com/package/html-pdf?activeTab=readme);
* [ejs](https://www.npmjs.com/package/ejs);
* [cors](https://www.npmjs.com/package/cors);
* [dotenv](https://www.npmjs.com/package/dotenv);
* [express](https://www.npmjs.com/package/express);
* [jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken);
* [mongodb](https://www.npmjs.com/package/mongodb);
* [mongoose](https://www.npmjs.com/package/mongoose);
* [morgan](https://www.npmjs.com/package/morgan);
* [eslint-friendly-formatter](https://www.npmjs.com/package/eslint-friendly-formatter);
* [eslint-plugin-html](https://www.npmjs.com/package/eslint-plugin-html);
* [eslint](https://www.npmjs.com/package/eslint);
* [eslint-config-airbnb-base](https://www.npmjs.com/package/eslint-config-airbnb-base);
* [eslint-plugin-import](https://www.npmjs.com/package/eslint-plugin-import).

> sistema

* [nodemon](https://www.npmjs.com/package/nodemon);
* [amqplib](https://www.npmjs.com/package/amqplib);
* [html-pdf](https://www.npmjs.com/package/html-pdf?activeTab=readme);
* [ejs](https://www.npmjs.com/package/ejs);
* [cors](https://www.npmjs.com/package/cors);
* [dotenv](https://www.npmjs.com/package/dotenv);
* [express](https://www.npmjs.com/package/express);
* [morgan](https://www.npmjs.com/package/morgan);
* [multer](https://www.npmjs.com/package/multer);
* [pg](https://www.npmjs.com/package/pg);
* [pg-hstore](https://www.npmjs.com/package/pg-hstore);
* [sequelize](https://www.npmjs.com/package/sequelize);
* [sequelize-cli](https://www.npmjs.com/package/sequelize-cli).
* [eslint-friendly-formatter](https://www.npmjs.com/package/eslint-friendly-formatter);
* [eslint-plugin-html](https://www.npmjs.com/package/eslint-plugin-html);
* [eslint](https://www.npmjs.com/package/eslint);
* [eslint-config-airbnb-base](https://www.npmjs.com/package/eslint-config-airbnb-base);
* [eslint-plugin-import](https://www.npmjs.com/package/eslint-plugin-import).

> barramento

* [nodemon](https://www.npmjs.com/package/nodemon);
* [amqplib](https://www.npmjs.com/package/amqplib);
* [cors](https://www.npmjs.com/package/cors);
* [dotenv](https://www.npmjs.com/package/dotenv);
* [express](https://www.npmjs.com/package/express);
* [morgan](https://www.npmjs.com/package/morgan);
* [nodemailer](https://www.npmjs.com/package/nodemailer);
* [googleapis](https://www.npmjs.com/package/googleapis);
* [google-auth-library](https://www.npmjs.com/package/google-auth-library);
* [@google-cloud/local-auth](https://www.npmjs.com/package/@google-cloud/local-auth); 
* [eslint-friendly-formatter](https://www.npmjs.com/package/eslint-friendly-formatter);
* [eslint-plugin-html](https://www.npmjs.com/package/eslint-plugin-html);
* [eslint](https://www.npmjs.com/package/eslint);
* [eslint-config-airbnb-base](https://www.npmjs.com/package/eslint-config-airbnb-base);
* [eslint-plugin-import](https://www.npmjs.com/package/eslint-plugin-import).
---
<center>

## Configuração do Ambiente



</center>

### Faça uma cópia do projeto

`$ git clone https://github.com/haruoSugano/app-doctor.git`

ou (SSH)

`$ git clone git@github.com:haruoSugano/app-doctor.git`

---
### Docker (Opcional)

Utilizar o *RabbitMQ* de forma local é necessário descomentar o seguinte trecho do arquivo `docker-compose.yml`:

```yml
  rabbitmq:
    image: rabbitmq:3.8-management-alpine
    container_name: 'rabbitmq'
    ports:
      - 5672:5672
      - 15672:15672
    volumes:
      - ~/.docker/rabbitmq/data/:/var/lib/rabbitmq/
      - ~/.docker/rabbitmq/log/:/var/log/rabbitmq
    networks:
      - rabbitmq_go_net
    environment:
      - RABBITMQ_DEFAULT_USER=admin
      - RABBITMQ_DEFAULT_PASS=admin
    restart: always
```

```yml
networks:
  rabbitmq_go_net:
    driver: bridge
```

Na pasta princiapl `app-doctor` inicie o docker-compose

`$ docker-compose up`

---

### Configurando as varáveis de ambiente

Na pasta `app-doctor`, entre no diretório e renomeie o arquivo `.env.dist` para `.env` após isso, configure as varáveis.

  **Exemplo**

> login

```dotenv
MONGODB_URL=mongodb://<USER>:<PASSWORD>@localhost:27017/?authMechanism=DEFAULT 
PORT=<PORT>
SECRET=<HASH>
EMAIL=
# URI=<amqp://> rabbitmq local
CLOUD_AMQP=<amqps://> #rabbitmq cloud
```

> sistema

```dotenv
DB_HOST=<LOCALHOST-URL>
POSTGRES_USER=<USER>
POSTGRES_PASSWORD=<PASSWORD>
PGDATA=<NAME_DATABASE>
DB_PORT=<PORT_DATABASE>
PORT=<PORT_LOCALHOST>
# URI=<amqp://> rabbitmq local
CLOUD_AMQP=<amqps://> #rabbitmq cloud
```

> barramento

```dotenv
EMAIL=<Seu email>
PORT_EMAIL=<ex: 465>
SMTP=<smtp.email.com>
PORT=<porta_local> #porta local
# URI=<amqp://> rabbitmq
CLOUD_AMQP=<amqps://> #rabbitmq
```
---

### Configurando Gmail API

**Acessar a pasta `barramento`**

Renomear o arquivo `credentials.json.dis` removendo o `.dist`. 

> Como configurar

* [Node.js quickstart](https://developers.google.com/gmail/api/quickstart/nodejs)
* [Google APIs Node.js Client](https://github.com/googleapis/google-api-nodejs-client#google-apis-nodejs-client)

---

### Baixe/Atualize as dependências e configure o BD

---

**Abrir o primeiro terminal**

*Navegue até a pasta frontend*

`$ cd frontend`

*Digite o comando:*

`$ npm install`

---

**Abrir o segundo terminal**

*Navegue até a pasta login*

`$ cd backend/api/login`

*Digite o comando:*

`$ npm install`

---

**Abrir o terceiro terminal**

*Navegue até a pasta sistema*

`$ cd backend/api/sistema`

*Digite o comando:*

`$ npm install`

*Configurando o banco de dados PostgreSQL*

`$ npx sequelize db:create`

`$ npx sequelize db:migrate`

---

**Abrir o quarto terminal**

*Navegue até a pasta email*

`$ cd backend/api/email`

*Digite o comando:*

`$ npm install`

---

### Execução

> frontend

`$ npm start`

> login

`$ npm start`

> sistema

`$ npm start`

> barramento

`$ npm start`