'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Artists extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.Albums, { 
        foreignKey: { name: "artistId" },
        sourceKey: "id",
      });
      this.hasMany(models.Artists_Tracks, { 
        foreignKey: { name: "artistId" },
        sourceKey: "id",
      });
    }
  };
  Artists.init({
    artistName: DataTypes.STRING,
    cover: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Artists',
  });
  return Artists;
};