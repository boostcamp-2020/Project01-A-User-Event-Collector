'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Users extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.Playlists, {
        foreignKey: { name: "author" },
        sourceKey: "id",
      });
      this.belongsToMany(models.Tracks, { through: "Users_Like_Tracks" });
      this.belongsToMany(models.Albums, { through: "Users_Like_Albums" });
      this.belongsToMany(models.Artists, { through: "Users_Like_Artists" });
      this.belongsToMany(models.Playlists, { through: "Users_Playlists" });
    }
  };
  Users.init({
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    oAuth: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Users',
  });
  return Users;
};