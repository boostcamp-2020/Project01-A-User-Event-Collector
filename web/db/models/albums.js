"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Albums extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.Tracks, {
        foreignKey: { name: "albumId" },
        sourceKey: "id",
      });
      this.belongsTo(models.Artists, {
        foreignKey: { name: "artistId" },
        sourceKey: "id",
        onDelete: "SET NULL",
      });
    }
  }
  Albums.init(
    {
      albumName: DataTypes.STRING,
      description: DataTypes.STRING,
      cover: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Albums",
    }
  );
  return Albums;
};
