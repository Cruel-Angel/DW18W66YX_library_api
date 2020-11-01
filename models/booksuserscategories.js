"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class booksUsersCategories extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  booksUsersCategories.init(
    {
      BookId: DataTypes.INTEGER,
      UserId: DataTypes.INTEGER,
      CategoryId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "booksUsersCategories",
    }
  );
  return booksUsersCategories;
};
