"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Playlists extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.Playlists_Tracks, {
        foreignKey: { name: "playlistId" },
        sourceKey: "id",
      });
      this.belongsTo(models.Users, {
        foreignKey: { name: "author" },
        sourceKey: "id",
        onDelete: "SET NULL",
      });
      this.belongsToMany(models.Users, { through: "Users_Playlists" });
    }
  }
  Playlists.init(
    {
      playlistName: DataTypes.STRING,
      description: DataTypes.STRING,
      cover: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Playlists",
    }
  );
  return Playlists;
};
