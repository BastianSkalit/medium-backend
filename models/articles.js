"use strict";
module.exports = (sequelize, DataTypes) => {
  const articles = sequelize.define(
    "articles",
    {
      title: DataTypes.STRING,
      content: DataTypes.TEXT,
      image: DataTypes.STRING,
      category_id: DataTypes.INTEGER,
      user_id: DataTypes.INTEGER,
      is_published: DataTypes.TINYINT,
      is_archived: DataTypes.TINYINT
    },
    {}
  );
  articles.associate = function(models) {
    // associations can be defined here
    articles.belongsTo(models.categories, {
      as: "categoryId",
      foreignKey: "category_id"
    });
    articles.belongsTo(models.users, {
      as: "userId",
      foreignKey: "user_id"
    });
  };
  return articles;
};
