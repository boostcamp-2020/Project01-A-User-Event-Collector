'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Tracks extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Albums, {
        foreignKey: { name: 'albumId'},
        sourceKey: 'id',
        onDelete: 'CASCADE',
      });
      this.hasMany(models.Playlists_Tracks, { 
        foreignKey: { name: "trackId" },
        sourceKey: "id",
      });
      this.hasMany(models.Artists_Tracks, { 
        foreignKey: { name: "trackId" },
        sourceKey: "id",
      });
    }
  };
  Tracks.init({
    trackName: DataTypes.STRING,
    albumTrackNumber: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Tracks',
  });
  return Tracks;
};