"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Magazines extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Playlists, {
        foreignKey: "playlistId",
        sourceKey: "id",
        onDelete: "SET NULL",
      });
    }
  }
  Magazines.init(
    {
      magazineName: DataTypes.STRING,
      type: DataTypes.STRING,
      description: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Magazines",
    }
  );
  return Magazines;
};