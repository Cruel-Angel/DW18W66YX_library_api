'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Books extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Books.belongsTo(models.Users,{
        as:"user",
        foreignKey:{
          name:"userId",
        }        
      })
      Books.belongsTo(models.Category,{
        as:"category",
        foreignKey:{
          name:"categoryId",
        }   
      })
    }
  };
  Books.init({
    title: DataTypes.STRING,
    publication: DataTypes.STRING,
    categoryId: DataTypes.INTEGER,
    userId: DataTypes.INTEGER,
    pages: DataTypes.INTEGER,
    ISBN: DataTypes.STRING,
    aboutBook: DataTypes.TEXT,
    file: DataTypes.STRING,
    status: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Books',
  });
  return Books;
};