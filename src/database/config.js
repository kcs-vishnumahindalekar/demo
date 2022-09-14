const dotenv = require("dotenv")

dotenv.config();

module.exports = {
  development: {
    dialect: "mysql",
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    autoLoadModels: true,
    synchronize: true,
  },
  test: {
    dialect: "mysql",
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    autoLoadModels: true,
    synchronize: true,
  },
  production: {
    dialect: "mysql",
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    autoLoadModels: true,
    synchronize: true,
  }
};


