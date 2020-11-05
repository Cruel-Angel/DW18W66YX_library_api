'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('Books', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type: Sequelize.STRING
      },
      author: {
        type: Sequelize.STRING
      },
      publication: {
        type: Sequelize.STRING
      },
      pages: {
        type: Sequelize.INTEGER
      },
      ISBN: {
        type: Sequelize.STRING
      },
      aboutBook: {
        type: Sequelize.TEXT
      },
      status: {
        type: Sequelize.STRING
      },
      uploadBy: {
        type: Sequelize.INTEGER
      },
      file: {
        type: Sequelize.STRING
      },
      thumbnail: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('Books');
  }
};