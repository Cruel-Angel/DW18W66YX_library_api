"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert(
      "Categories",
      [
        {
          name: "Sci - fi",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Education",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Comedy",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Adventure",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Historical",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Dark - Fantasy",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Fantasy",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Thriller",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Super Power",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: "Action",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("Categories", null, {});
  },
};
