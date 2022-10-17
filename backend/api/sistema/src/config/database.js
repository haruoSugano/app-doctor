require("dotenv").config();

module.exports = {
    dialect: "postgres",
    host: process.env.DB_HOST,
    username: process.env.POSTGRES_USER,
    password: process.env.POSTGRES_PASSWORD,
    database: process.env.PGDATA,
    port: process.env.DB_PORT,
    define: {
      timestamp: true,
      underscored: true
    },
  };
