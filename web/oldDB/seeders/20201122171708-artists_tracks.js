"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Tracks', [
    {
      id: 1,
      airtistId: 1,
      trackId: 1,
      createdAt: new Date().toISOString().slice(0, 19).replace('T', ' '),
      updatedAt: new Date().toISOString().slice(0, 19).replace('T', ' ')
    },
    {
      id: 21,
      airtistId: 2,
      trackId: 1,
      createdAt: new Date().toISOString().slice(0, 19).replace('T', ' '),
      updatedAt: new Date().toISOString().slice(0, 19).replace('T', ' ')
    },
    {
      id: 2,
      airtistId: 1,
      trackId: 2,
      createdAt: new Date().toISOString().slice(0, 19).replace('T', ' '),
      updatedAt: new Date().toISOString().slice(0, 19).replace('T', ' ')
    },
    {
      id: 3,
      airtistId: 1,
      trackId: 3,
      createdAt: new Date().toISOString().slice(0, 19).replace('T', ' '),
      updatedAt: new Date().toISOString().slice(0, 19).replace('T', ' ')
    },
    {
      id: 4,
      airtistId: 1,
      trackId: 4,
      createdAt: new Date().toISOString().slice(0, 19).replace('T', ' '),
      updatedAt: new Date().toISOString().slice(0, 19).replace('T', ' ')
    },
    {
      id: 5,
      airtistId: 1,
      trackId: 5,
      createdAt: new Date().toISOString().slice(0, 19).replace('T', ' '),
      updatedAt: new Date().toISOString().slice(0, 19).replace('T', ' ')
    },
    {
      id: 6,
      airtistId: 1,
      trackId: 6,
      createdAt: new Date().toISOString().slice(0, 19).replace('T', ' '),
      updatedAt: new Date().toISOString().slice(0, 19).replace('T', ' ')
    },
    {
      id: 7,
      airtistId: 1,
      trackId: 7,
      createdAt: new Date().toISOString().slice(0, 19).replace('T', ' '),
      updatedAt: new Date().toISOString().slice(0, 19).replace('T', ' ')
    },
    {
      id: 8,
      airtistId: 1,
      trackId: 8,
      createdAt: new Date().toISOString().slice(0, 19).replace('T', ' '),
      updatedAt: new Date().toISOString().slice(0, 19).replace('T', ' ')
    },
    {
      id: 9,
      airtistId: 1,
      trackId: 9,
      createdAt: new Date().toISOString().slice(0, 19).replace('T', ' '),
      updatedAt: new Date().toISOString().slice(0, 19).replace('T', ' ')
    },
    {
      id: 10,
      airtistId: 1,
      trackId: 10,
      createdAt: new Date().toISOString().slice(0, 19).replace('T', ' '),
      updatedAt: new Date().toISOString().slice(0, 19).replace('T', ' ')
    },
    {
      id: 11,
      airtistId: 1,
      trackId: 11,
      createdAt: new Date().toISOString().slice(0, 19).replace('T', ' '),
      updatedAt: new Date().toISOString().slice(0, 19).replace('T', ' ')
    },
    {
      id: 12,
      airtistId: 1,
      trackId: 12,
      createdAt: new Date().toISOString().slice(0, 19).replace('T', ' '),
      updatedAt: new Date().toISOString().slice(0, 19).replace('T', ' ')
    },
    {
      id: 13,
      airtistId: 1,
      trackId: 13,
      createdAt: new Date().toISOString().slice(0, 19).replace('T', ' '),
      updatedAt: new Date().toISOString().slice(0, 19).replace('T', ' ')
    },
    {
      id: 14,
      airtistId: 1,
      trackId: 14,
      createdAt: new Date().toISOString().slice(0, 19).replace('T', ' '),
      updatedAt: new Date().toISOString().slice(0, 19).replace('T', ' ')
    },
    {
      id: 15,
      airtistId: 1,
      trackId: 15,
      createdAt: new Date().toISOString().slice(0, 19).replace('T', ' '),
      updatedAt: new Date().toISOString().slice(0, 19).replace('T', ' ')
    },
    {
      id: 16,
      airtistId: 1,
      trackId: 16,
      createdAt: new Date().toISOString().slice(0, 19).replace('T', ' '),
      updatedAt: new Date().toISOString().slice(0, 19).replace('T', ' ')
    },
    {
      id: 17,
      airtistId: 1,
      trackId: 17,
      createdAt: new Date().toISOString().slice(0, 19).replace('T', ' '),
      updatedAt: new Date().toISOString().slice(0, 19).replace('T', ' ')
    },
    {
      id: 18,
      airtistId: 1,
      trackId: 18,
      createdAt: new Date().toISOString().slice(0, 19).replace('T', ' '),
      updatedAt: new Date().toISOString().slice(0, 19).replace('T', ' ')
    },
    {
      id: 19,
      airtistId: 1,
      trackId: 19,
      createdAt: new Date().toISOString().slice(0, 19).replace('T', ' '),
      updatedAt: new Date().toISOString().slice(0, 19).replace('T', ' ')
    },
    {
      id: 20,
      airtistId: 1,
      trackId: 20,
      createdAt: new Date().toISOString().slice(0, 19).replace('T', ' '),
      updatedAt: new Date().toISOString().slice(0, 19).replace('T', ' ')
    },
  ]);
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Artists_Tracks", null, {});
  },
};
