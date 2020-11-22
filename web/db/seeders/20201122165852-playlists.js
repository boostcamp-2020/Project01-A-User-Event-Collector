"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    let datas = [];
    for (let i = 1; i <= 5; i++) {
      let obj = {
        id: i,
        playlistName: `플레이리스트 number =${i}`,
        description: "이거슨 플레이리스트여 ㄹㅇ루다가",
        createdAt: new Date().toISOString().slice(0, 19).replace("T", " "),
        updatedAt: new Date().toISOString().slice(0, 19).replace("T", " "),
      };
      datas.push(obj);
    }
    return await queryInterface.bulkInsert("Playlists", datas, {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Playlists", null, {});
  },
};
