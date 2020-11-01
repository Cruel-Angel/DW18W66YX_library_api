"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Books extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Books.belongsToMany(models.Users, {
        as: "user",
        through: {
          model: "booksUsersCategories",
          as: "info",
        },
      });
      Books.belongsToMany(models.Categories, {
        as: "category",
        through: {
          model: "booksUsersCategories",
          as: "info",
        },
      });
    }
  }
  Books.init(
    {
      title: DataTypes.STRING,
      author: DataTypes.STRING,
      publication: DataTypes.STRING,
      pages: DataTypes.INTEGER,
      ISBN: DataTypes.STRING,
      aboutBook: DataTypes.TEXT,
      status: DataTypes.STRING,
      uploadBy: DataTypes.INTEGER,
      file: DataTypes.STRING,
      thumbnail: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Books",
    }
  );
  return Books;
};
