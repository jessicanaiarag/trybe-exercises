const { sequelize, DataTypes } = require('./sequelize');
const getProductModel = require('./Product');

const Product = getProductModel(sequelize, DataTypes);

module.exports = {
    Product,
};