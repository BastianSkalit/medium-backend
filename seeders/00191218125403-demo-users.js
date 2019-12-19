"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "users",
      [
        {
          fullname: "Bastian Simanungkalit",
          username: "BastianSkalit",
          email: "simanungkalitbastian@gmail.com",
          password: "121314",
          is_active: "1",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          fullname: "Bolang Petualang",
          username: "SiBolang",
          email: "bolangpetualang@gmail.com",
          password: "222324",
          is_active: "1",
          createdAt: new Date(),
          updatedAt: new Date()
        },
        {
          fullname: "Dora",
          username: "DoraSwipper",
          email: "doraswipper@gmail.com",
          password: "323334",
          is_active: "1",
          createdAt: new Date(),
          updatedAt: new Date()
        }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("users", null, {});
  }
};
