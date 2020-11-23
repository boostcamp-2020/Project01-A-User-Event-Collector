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
      this.belongsToMany(models.Users, { through: "Users_Like_Albums" });
      this.belongsToMany(models.Genres, { through: "Albums_Genres" });
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
