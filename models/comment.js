"use strict";
module.exports = (sequelize, DataTypes) => {
  const comment = sequelize.define(
    "comment",
    {
      article_id: DataTypes.INTEGER,
      user_id: DataTypes.INTEGER,
      comment: DataTypes.TEXT,
      is_published: DataTypes.TINYINT,
      is_archived: DataTypes.TINYINT
    },
    {}
  );
  comment.associate = function(models) {
    comment.belongsTo(models.articles, {
      as: "articleId",
      foreignKey: "article_id"
    });
    comment.belongsTo(models.users, {
      as: "userId",
      foreignKey: "user_id"
    });
  };
  return comment;
};
