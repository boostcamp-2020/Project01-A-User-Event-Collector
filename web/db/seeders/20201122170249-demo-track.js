'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Tracks', [
      {
      id: 1,
      trackName: "우기와 친구들",
      albumTrackNumber: 1,
      albumId: 1,
      createdAt: new Date().toISOString().slice(0, 19).replace('T', ' '),
      updatedAt: new Date().toISOString().slice(0, 19).replace('T', ' ')
    },
    {
      id: 2,
      trackName: "우기몬",
      albumTrackNumber: 2,
      albumId: 1,
      createdAt: new Date().toISOString().slice(0, 19).replace('T', ' '),
      updatedAt: new Date().toISOString().slice(0, 19).replace('T', ' ')
    },
    {
      id: 3,
      trackName: "북경강얼쥐",
      albumTrackNumber: 3,
      albumId: 1,
      createdAt: new Date().toISOString().slice(0, 19).replace('T', ' '),
      updatedAt: new Date().toISOString().slice(0, 19).replace('T', ' ')
    },
    {
      id: 4,
      trackName: "사랑... 그 놈",
      albumTrackNumber: 4,
      albumId: 1,
      createdAt: new Date().toISOString().slice(0, 19).replace('T', ' '),
      updatedAt: new Date().toISOString().slice(0, 19).replace('T', ' ')
    },
    {
      id: 5,
      trackName: "우기, 그 운명적인 만남에 대하여",
      albumTrackNumber: 5,
      albumId: 1,
      createdAt: new Date().toISOString().slice(0, 19).replace('T', ' '),
      updatedAt: new Date().toISOString().slice(0, 19).replace('T', ' ')
    },
    {
      id: 6,
      trackName: "사랑은 국경을 넘어",
      albumTrackNumber: 6,
      albumId: 1,
      createdAt: new Date().toISOString().slice(0, 19).replace('T', ' '),
      updatedAt: new Date().toISOString().slice(0, 19).replace('T', ' ')
    },
    {
      id: 7,
      trackName: "음악과 사랑",
      albumTrackNumber: 1,
      albumId: 2,
      createdAt: new Date().toISOString().slice(0, 19).replace('T', ' '),
      updatedAt: new Date().toISOString().slice(0, 19).replace('T', ' ')
    },
    {
      id: 8,
      trackName: "냉정과 열정 사이",
      albumTrackNumber: 2,
      albumId: 2,
      createdAt: new Date().toISOString().slice(0, 19).replace('T', ' '),
      updatedAt: new Date().toISOString().slice(0, 19).replace('T', ' ')
    },
    {
      id: 9,
      trackName: "우기 교양곡",
      albumTrackNumber: 3,
      albumId: 2,
      createdAt: new Date().toISOString().slice(0, 19).replace('T', ' '),
      updatedAt: new Date().toISOString().slice(0, 19).replace('T', ' ')
    },
    {
      id: 10,
      trackName: "위대한 우기쇼",
      albumTrackNumber: 4,
      albumId: 2,
      createdAt: new Date().toISOString().slice(0, 19).replace('T', ' '),
      updatedAt: new Date().toISOString().slice(0, 19).replace('T', ' ')
    },
    {
      id: 11,
      trackName: "우기, 막을 올리며",
      albumTrackNumber: 1,
      albumId: 3,
      createdAt: new Date().toISOString().slice(0, 19).replace('T', ' '),
      updatedAt: new Date().toISOString().slice(0, 19).replace('T', ' ')
    },
    {
      id: 12,
      trackName: "우기, 그 위대한 서사시 1",
      albumTrackNumber: 2,
      albumId: 3,
      createdAt: new Date().toISOString().slice(0, 19).replace('T', ' '),
      updatedAt: new Date().toISOString().slice(0, 19).replace('T', ' ')
    },
    {
      id: 13,
      trackName: "우기, 그 위대한 서사시 2",
      albumTrackNumber: 3,
      albumId: 3,
      createdAt: new Date().toISOString().slice(0, 19).replace('T', ' '),
      updatedAt: new Date().toISOString().slice(0, 19).replace('T', ' ')
    },
    {
      id: 14,
      trackName: "우기, 그 위대한 서사시 3",
      albumTrackNumber: 4,
      albumId: 3,
      createdAt: new Date().toISOString().slice(0, 19).replace('T', ' '),
      updatedAt: new Date().toISOString().slice(0, 19).replace('T', ' ')
    },
    {
      id: 15,
      trackName: "우기, 그 위대한 서사시 4",
      albumTrackNumber: 5,
      albumId: 3,
      createdAt: new Date().toISOString().slice(0, 19).replace('T', ' '),
      updatedAt: new Date().toISOString().slice(0, 19).replace('T', ' ')
    },
    {
      id: 16,
      trackName: "우기, 그 위대한 서사시 5",
      albumTrackNumber: 6,
      albumId: 3,
      createdAt: new Date().toISOString().slice(0, 19).replace('T', ' '),
      updatedAt: new Date().toISOString().slice(0, 19).replace('T', ' ')
    },
    {
      id: 17,
      trackName: "우기, 그 위대한 서사시 6",
      albumTrackNumber: 7,
      albumId: 3,
      createdAt: new Date().toISOString().slice(0, 19).replace('T', ' '),
      updatedAt: new Date().toISOString().slice(0, 19).replace('T', ' ')
    },
    {
      id: 18,
      trackName: "우기, 그 위대한 서사시 7",
      albumTrackNumber: 8,
      albumId: 3,
      createdAt: new Date().toISOString().slice(0, 19).replace('T', ' '),
      updatedAt: new Date().toISOString().slice(0, 19).replace('T', ' ')
    },
    {
      id: 19,
      trackName: "우기, 그 위대한 서사시 8",
      albumTrackNumber: 9,
      albumId: 3,
      createdAt: new Date().toISOString().slice(0, 19).replace('T', ' '),
      updatedAt: new Date().toISOString().slice(0, 19).replace('T', ' ')
    },
    {
      id: 20,
      trackName: "우기, 막을 내리며",
      albumTrackNumber: 10,
      albumId: 3,
      createdAt: new Date().toISOString().slice(0, 19).replace('T', ' '),
      updatedAt: new Date().toISOString().slice(0, 19).replace('T', ' ')
    },
  ])
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Tracks', null, {});
  }
};
