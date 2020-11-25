"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Magazines', [
      {
        id: 1,
        magazineName: '월간 아이들 1호',
        playlistId: 1,
        magazineType: 'PICK',
        description: '아이들 그들의 뮤즈는 누구인가? 아이들학 석사인 이유택 석사는 그에 대해 이렇게 말했다. "아이들은 천재입니다. 그들의 음악성은 아이돌 그 이상이에요."',
        createdAt: new Date().toISOString().slice(0, 19).replace('T', ' '),
        updatedAt: new Date().toISOString().slice(0, 19).replace('T', ' ')
      },
      {
        id: 2,
        magazineName: '월간 아이들 2호',
        playlistId: 2,
        magazineType: 'PICK',
        description: '우기의 남자친구가 이유택으로 밝혀져..."',
        createdAt: new Date().toISOString().slice(0, 19).replace('T', ' '),
        updatedAt: new Date().toISOString().slice(0, 19).replace('T', ' ')
      },
    ])
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Magazines", null, {});
  },
};
