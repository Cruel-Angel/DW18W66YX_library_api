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
          CategoryId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          BookId: 2,
          UserId: null,
          CategoryId: 4,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          BookId: 3,
          UserId: null,
          CategoryId: 5,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          BookId: 4,
          UserId: null,
          CategoryId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          BookId: 5,
          UserId: null,
          CategoryId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          BookId: 6,
          UserId: null,
          CategoryId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          BookId: 7,
          UserId: null,
          CategoryId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          BookId: 8,
          UserId: null,
          CategoryId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          BookId: 9,
          UserId: null,
          CategoryId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          BookId: 10,
          UserId: null,
          CategoryId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          BookId: 11,
          UserId: null,
          CategoryId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          BookId: 12,
          UserId: null,
          CategoryId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          BookId: 13,
          UserId: null,
          CategoryId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          BookId: 14,
          UserId: null,
          CategoryId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          BookId: 15,
          UserId: null,
          CategoryId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          BookId: 16,
          UserId: null,
          CategoryId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          BookId: 17,
          UserId: null,
          CategoryId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          BookId: 18,
          UserId: null,
          CategoryId: 2,
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
