import * as sequelize from 'sequelize';

export default {
    up: (queryInterface: sequelize.QueryInterface, Sequelize: sequelize.SequelizeStatic) => {
        return queryInterface.createTable('Albums_Genres', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },

            modelName: {
                type: Sequelize.STRING
            },

            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },

            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });
    },

    down: (queryInterface: sequelize.QueryInterface, Sequelize: sequelize.SequelizeStatic) => {
        return queryInterface.dropTable('Albums_Genres');
    }
};
