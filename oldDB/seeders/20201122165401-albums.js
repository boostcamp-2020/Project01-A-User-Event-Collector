'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Albums', [
      {
      id: 1,
      artistId: 1,
      albumName: "우기 파워",
      description: "우기와 유택이의 지구를 감동시킨 사랑 스토리!",
      cover: null,
      createdAt: new Date().toISOString().slice(0, 19).replace('T', ' '),
      updatedAt: new Date().toISOString().slice(0, 19).replace('T', ' ')
    },
    {
      id: 2,
      artistId: 1,
      albumName: "사랑... 그 놈",
      description: "사랑과 우정 사이에서 갈등하는 유택.. 네버랜드냐 일이냐?",
      cover: "https://www.yuqi.com",
      createdAt: new Date().toISOString().slice(0, 19).replace('T', ' '),
      updatedAt: new Date().toISOString().slice(0, 19).replace('T', ' ')
    },
    {
      id: 3,
      artistId: 1,
      albumName: "우기, 그 위대한 여정",
      description: "우기, 그 위대한 여정. 함께하는 사랑",
      cover: "https://www.yuqi.com/picture",
      createdAt: new Date().toISOString().slice(0, 19).replace('T', ' '),
      updatedAt: new Date().toISOString().slice(0, 19).replace('T', ' ')
    },
  ])
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Albums', null, {});
  }
};