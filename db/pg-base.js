const { Sequelize } = require("sequelize");

module.exports = new Sequelize(
  process.env.POSTGRESS_DB,
  process.env.POSTGRESS_USER,
  process.env.POSTGRESS_PASSWORD,
  {
    dialect: "postgres",
    host: process.env.POSTGRESS_HOST,
    port: process.env.POSTGRESS_PORT,
  }
);
