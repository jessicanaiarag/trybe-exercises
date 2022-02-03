

const getProductModel = (sequelize, DataTypes) =>
    sequelize.define(
        'Product',
        {
            name: DataTypes.STRING,
            descripttion: DataTypes.STRING,
            price: DataTypes.DECIMAL,
        },
        {
            timestamps: false,
            tableName: 'products',
        },
    );

module.exports = getProductModel;