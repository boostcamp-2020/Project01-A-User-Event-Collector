'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class News extends Model {
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
  };
  News.init({
    newsName: DataTypes.STRING,
    type: DataTypes.STRING,
    description: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'News',
  });
  return News;
};