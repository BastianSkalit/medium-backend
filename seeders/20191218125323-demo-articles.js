"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "articles",
      [
        {
          title: "Kisah Cinta Bolang dan Dora",
          content: "Cinta bersemi di hutan bakau",
          image: "gambar1.jpg",
          category_id: "1",
          user_id: "1",
          is_published: "1",
          is_archived: "1",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: "Peta si maha tau perjalanan",
          content: "si peta ",
          image: "gambar2.jpg",
          category_id: "2",
          user_id: "3",
          is_published: "1",
          is_archived: "1",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          title: "Kematian Swiper",
          content: "Horor",
          image: "gambar3.jpg",
          category_id: "3",
          user_id: "2",
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
    return queryInterface.bulkDelete("articles", null, {});
  }
};
