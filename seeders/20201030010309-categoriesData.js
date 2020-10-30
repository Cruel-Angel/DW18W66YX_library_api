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
        },
        {
          name: "Anime",
        },
        {
          name: "Comedy",
        },
        {
          name: "Adventure",
        },
        {
          name: "Dark - Fantasy",
        },
        {
          name: "Fantasy",
        },
        {
          name: "Thriller",
        },
        {
          name: "Super Power",
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
