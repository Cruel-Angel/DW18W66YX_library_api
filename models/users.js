'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Users.belongsToMany(models.Books,{
        as: "books",
        through:{
          model:"BooksUserCategories",
          as: "info",
        },
      });
    }
  };
  Users.init({
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    fullName: DataTypes.STRING,
    gender: DataTypes.STRING,
    phone: DataTypes.STRING,
    address: DataTypes.STRING,
    avatar: DataTypes.STRING,
    isAdmin: DataTypes.BOOLEAN,    
  }, {
    sequelize,
    modelName: 'Users',
  });
  return Users;
};