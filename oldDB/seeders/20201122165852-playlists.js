"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Playlists', [
      {
        id: 1,
        playlistName: "우기's 플레이리스트",
        description: "우기가 가장 좋아하는 노래가 무엇일까요?",
        cover: null,
        author: 1,
        createdAt: new Date().toISOString().slice(0, 19).replace('T', ' '),
        updatedAt: new Date().toISOString().slice(0, 19).replace('T', ' ')
      },
      {
        id: 2,
        playlistName: "아이들's 플레이리스트",
        description: "유택이가 우기를 생각하며 듣는 노래들... 사랑... 그 놈",
        cover: null,
        author: 2,
        createdAt: new Date().toISOString().slice(0, 19).replace('T', ' '),
        updatedAt: new Date().toISOString().slice(0, 19).replace('T', ' ')
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Playlists", null, {});
  },
};
