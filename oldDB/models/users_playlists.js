'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Users_Playlists extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Users_Playlists.init({
    recent: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Users_Playlists',
  });
  return Users_Playlists;
};