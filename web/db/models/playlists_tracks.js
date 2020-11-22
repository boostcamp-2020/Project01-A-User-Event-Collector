'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Playlists_Tracks extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Playlists_Tracks.init({
    playlistTrackNumber: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Playlists_Tracks',
  });
  return Playlists_Tracks;
};