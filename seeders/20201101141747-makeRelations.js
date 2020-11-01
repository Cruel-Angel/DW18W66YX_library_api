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
      "booksUsersCategories",
      [
        {
          bookId: 1,
          userId: null,
          categoryId: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          bookId: 2,
          userId: null,
          categoryId: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          bookId: 3,
          userId: null,
          categoryId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          bookId: 4,
          userId: null,
          categoryId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          bookId: 5,
          userId: null,
          categoryId: 10,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          bookId: 6,
          userId: null,
          categoryId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          bookId: 7,
          userId: null,
          categoryId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          bookId: 8,
          userId: null,
          categoryId: 3,
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
     * Example:*/
    await queryInterface.bulkDelete("booksUsersCategories", null, {});
  },
};
