'use strict';
module.exports = (sequelize, DataTypes) => {
  const categories = sequelize.define('categories', {
    name: DataTypes.STRING,
    is_published: DataTypes.TINYINT,
    is_archived: DataTypes.TINYINT
  }, {});
  categories.associate = function(models) {
    // associations can be defined here
  };
  return categories;
};