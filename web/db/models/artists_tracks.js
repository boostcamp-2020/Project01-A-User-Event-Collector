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
      // define association here
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
