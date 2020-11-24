'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class DJStations extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  DJStations.init({
    stationName: DataTypes.STRING,
    cover: DataTypes.STRING,
    popularity: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'DJStations',
  });
  return DJStations;
};