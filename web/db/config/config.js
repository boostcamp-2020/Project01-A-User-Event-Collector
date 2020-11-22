module.exports = {
  development: {
    username: process.env.DB_USER,
    password: process.env.DB_PWD,
    database: process.env.DATABASE,
    host: process.env.DB_HOST,
    dialect: "mysql",
  },
  test: {
    username: process.env.DB_USER,
    password: process.env.DB_PWD,
    database: process.env.DATABASE,
    host: process.env.DB_HOST,
    dialect: "mysql",
  },
  production: {
    username: process.env.DB_USER,
    password: process.env.DB_PWD,
    database: process.env.DATABASE,
    host: process.env.DB_HOST,
    dialect: "mysql",
  },
};
