"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "categories",
      [
        {
          name: "Fantasy",
          is_published: "1",
          is_archived: "1",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Romance",
          is_published: "1",
          is_archived: "1",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          name: "Horror",
          is_published: "1",
          is_archived: "1",
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("categories", null, {});
  }
};
