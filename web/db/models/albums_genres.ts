import {
    Sequelize,
    DataTypes
} from 'sequelize';

export interface Albums_GenresAttributes {
    modelName ? : string;

}

export interface Albums_GenresInstance {
    id: number;
    createdAt: Date;
    updatedAt: Date;

    modelName: string;

}

export = (sequelize: Sequelize, DataTypes: DataTypes) => {
    var Albums_Genres = sequelize.define('Albums_Genres', {
        modelName: DataTypes.STRING
    });

    Albums_Genres.associate = function(models) {
        // associations can be defined here
    };

    return Albums_Genres;
};
