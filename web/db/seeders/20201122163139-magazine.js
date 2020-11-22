"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    let datas = [];
    for (let i = 1; i <= 3; i++) {
      let obj = {
        id: i,
        magazineName: `새벽 코딩 너무 좋아요 number =${i}`,
        type: "pick",
        description: "유택이 병건이의 새벽 코딩",
        createdAt: new Date().toISOString().slice(0, 19).replace("T", " "),
        updatedAt: new Date().toISOString().slice(0, 19).replace("T", " "),
      };
      datas.push(obj);
    }
    return await queryInterface.bulkInsert("Magazines", datas, {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Magazines", null, {});
  },
};
