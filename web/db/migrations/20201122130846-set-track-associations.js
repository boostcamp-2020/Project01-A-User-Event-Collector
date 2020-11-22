'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn("Tracks", "albumId", {
      type: Sequelize.INTEGER,
      references: { model: "Albums", key: "id" },

      onUpdate: "SET NULL",
      onDelete: "CASCADE",
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
