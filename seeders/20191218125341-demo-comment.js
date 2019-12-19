"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "comments",
      [
        {
          article_id: "1",
          user_id: "1",
          comment: "Wahh",
          is_published: "1",
          is_archived: "1",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          article_id: "2",
          user_id: "2",
          comment: "Naniii",
          is_published: "1",
          is_archived: "1",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          article_id: "3",
          user_id: "3",
          comment: "Majikayo",
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
    return queryInterface.bulkDelete("comments", null, {});
  }
};
