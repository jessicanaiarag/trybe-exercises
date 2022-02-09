'use strict';

const { QueryInterface } = require("sequelize/dist");

module.exports = {
  up: async(queryInterface, Sequelize) => {
    return queryInterface.createTable('Books', {
      id: {
        allowNull:false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTERGER,
      },
      title: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      author: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      pageQuantity: {
        allowNull: true,
        type: DataTypes.INTERGER,
      },
      createdAt: {
        allowNull: false,
        type: DataTypes.DATE,
      },
      // adicione tbm uma data de update nos atributos do livro que se altera sempre q o livro for atualizado.
      updatedAt: {
        allowNull: false,
        type: DataTypes.DATE
      }
    });
  },

  down: (queryInterface, Sequelize) => {
    return QueryInterface.dropTable('Books');
  },
};
