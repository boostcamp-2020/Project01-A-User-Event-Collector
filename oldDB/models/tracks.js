"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Tracks extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Albums, {
        foreignKey: { name: "albumId" },
        sourceKey: "id",
        onDelete: "SET NULL",
      });
      this.hasMany(models.Artists_Tracks, {
        foreignKey: { name: "trackId" },
        sourceKey: "id",
        onDelete: "SET NULL",
      });
      this.belongsToMany(models.Users, { through: "Users_Like_Tracks" });
      this.belongsToMany(models.Genres, { through: "Tracks_Genres" });
    }
  }
  Tracks.init(
    {
      trackName: DataTypes.STRING,
      albumTrackNumber: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Tracks",
    }
  );
  return Tracks;
};
