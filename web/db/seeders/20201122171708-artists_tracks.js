"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    let datas = [];
    for (let i = 1; i <= 10; i++) {
      let obj = {
        id: i,
        createdAt: new Date().toISOString().slice(0, 19).replace("T", " "),
        updatedAt: new Date().toISOString().slice(0, 19).replace("T", " "),
        trackId: Math.floor(Math.random() * 20) + 1,
        artistId: Math.floor(Math.random() * 2) + 1,
      };
      datas.push(obj);
    }
    return await queryInterface.bulkInsert("Artists_Tracks", datas, {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Artists_Tracks", null, {});
  },
};
