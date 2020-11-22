"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Artists_Tracks extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Artists, {
        foreignKey: { name: 'artistId'},
        sourceKey: 'id',
        onDelete: 'CASCADE',
      });
      this.belongsTo(models.Tracks, {
        foreignKey: { name: 'trackId'},
        sourceKey: 'id',
        onDelete: 'CASCADE',
      });
    }
  }
  Artists_Tracks.init(
    {},
    {
      sequelize,
      modelName: "Artists_Tracks",
    }
  );
  return Artists_Tracks;
};
