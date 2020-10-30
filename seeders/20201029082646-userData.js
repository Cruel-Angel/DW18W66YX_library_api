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
      "Users",
      [
        {
          email: "admin@admin.com",
          password:
            "$2b$10$mvzX1JQx49sxa.ntfXh9NeJduIcoK16ce0bGYU3lBs4w7Dm/SOaoy",
          fullName: "Iya Siapa?",
          gender: "Male",
          phone: "082347660388",
          address: "Jln. Johor No5.A Asrama, Perak Timur, Surabaya",
          avatar: null,
          isAdmin: true,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          email: "siapa@aku.com",
          password:
            "$2b$10$ylO3NqUWdclXVfjbOdEay.P3eXeTRaKhSum1aeNDiD21coQQL/TlW",
          fullName: "Iya Siapa?",
          gender: "Male",
          phone: "082347660388",
          address: "Jln. Johor No5.A Asrama, Perak Timur, Surabaya",
          avatar: null,
          isAdmin: false,
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
    await queryInterface.bulkDelete("Users", null, {});
  },
};
