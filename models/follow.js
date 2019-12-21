"use strict";
module.exports = (sequelize, DataTypes) => {
  const follow = sequelize.define(
    "follow",
    {
      user_id: DataTypes.INTEGER
    },
    {}
  );
  follow.associate = function(models) {
    // associations can be defined here
    follow.belongsToMany(models.users, {
      as: "userId",
      foreignKey: "user_id"
    });
  };
  follow.associate = function(models) {
    // associations can be defined here
    follow.belongsToMany(models.users, {
      as: "userId",
      foreignKey: "user_id"
    });
  };
  return follow;
};
