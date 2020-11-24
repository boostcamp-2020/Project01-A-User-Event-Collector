'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("Albums", "artistId", {
      type: Sequelize.INTEGER,
      references: { model: "Artists", key: "id" },

      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });
    await queryInterface.addColumn("Magazines", "playlistId", {
      type: Sequelize.INTEGER,
      references: { model: "Playlists", key: "id" },

      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });
    await queryInterface.addColumn("Playlists_Tracks", "playlistId", {
      type: Sequelize.INTEGER,
      references: { model: "Playlists", key: "id" },

      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });
    await queryInterface.addColumn("Playlists_Tracks", "trackId", {
      type: Sequelize.INTEGER,
      references: { model: "Tracks", key: "id" },

      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });
    await queryInterface.addColumn("Artists_Tracks", "trackId", {
      type: Sequelize.INTEGER,
      references: { model: "Tracks", key: "id" },

      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });
    await queryInterface.addColumn("Artists_Tracks", "artistId", {
      type: Sequelize.INTEGER,
      references: { model: "Artists", key: "id" },

      onUpdate: "CASCADE",
      onDelete: "SET NULL",
    });
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
