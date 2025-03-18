const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  database: 'student_db',
  username: 'postgres',
  password: 'root',
  host: 'database',
  dialect: 'postgres',
});

module.exports = sequelize;