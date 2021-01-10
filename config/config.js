module.exports = {
      "use_env_variable": false,
      "username": "sqliapp",
      "password": process.env.DB_PASSWORD,
      "database": "sqlidb",
      "host": "127.0.0.1",
      "dialect": "mariadb",
      "dialectOptions": {
        "multipleStatements": true
      }
};