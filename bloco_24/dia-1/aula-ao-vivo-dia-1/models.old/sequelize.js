const { Sequelize, DataTypes} = require('sequelize');

const sequelize = new Sequelize({
    host: 'localhost',
    username: 'jessica',
    password: 'Chuck@2536',
    database: 'lecture_24_1',
    dialect: 'mysql',
});
 module.exports = { sequelize, DataTypes };


