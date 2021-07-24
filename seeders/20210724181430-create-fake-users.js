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
      "users",
      [
        {
          name: "John Doe",
          email: "john@gmail.com",
          role: "admin",
          uuid: "8bd7e286-32cc-48e3-9e92-c20168d18e51",
          createdAt: "2021-07-24 18:24:14",
          updatedAt: "2021-07-24 18:24:14",
        },
        {
          name: "Jane Doe",
          email: "jane@gmail.com",
          role: "admin",
          uuid: "8bd7e242-32cc-48e3-9e92-c20168d18e51",
          createdAt: "2021-07-24 12:24:14",
          updatedAt: "2021-07-24 12:24:14",
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

    await queryInterface.bulkDelete("users", null, {});
  },
};
