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
          BookId: 1,
          UserId: null,
          CategoryId: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          BookId: 2,
          UserId: null,
          CategoryId: 6,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          BookId: 3,
          UserId: null,
          CategoryId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          BookId: 4,
          UserId: null,
          CategoryId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          BookId: 5,
          UserId: null,
          CategoryId: 10,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          BookId: 6,
          UserId: null,
          CategoryId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          BookId: 7,
          UserId: null,
          CategoryId: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          BookId: 8,
          UserId: null,
          CategoryId: 3,
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
