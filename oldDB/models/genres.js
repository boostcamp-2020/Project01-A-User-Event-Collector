'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Genres extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsToMany(models.Tracks, { through: "Tracks_Genres" });
      this.belongsToMany(models.Albums, { through: "Albums_Genres" });
      this.belongsToMany(models.Artists, { through: "Artists_Genres" });
    }
  };
  Genres.init({
    genreName: DataTypes.STRING,
    popularity: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Genres',
  });
  return Genres;
};