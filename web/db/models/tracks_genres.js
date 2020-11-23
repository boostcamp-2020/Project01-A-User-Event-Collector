'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tracks_Genres extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Tracks_Genres.init({
  }, {
    sequelize,
    modelName: 'Tracks_Genres',
  });
  return Tracks_Genres;
};