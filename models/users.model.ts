

import { DataTypes, InitOptions, ModelAttributes, Model, Sequelize } from 'sequelize';
import dotenv from 'dotenv';
import sequelizeConnection from '../db/config';
dotenv.config();

export default class Users extends Model{
    static readonly modelName:string = 'Users';

    declare firstName: string;
    declare middleName: string;
    declare lastName: string;
    declare email: string;
    declare username: string;
    declare password: string;
    declare active: boolean;

    static associate() {
      
    }
}

let options: InitOptions = {
    sequelize: sequelizeConnection,
    tableName: Users.modelName,
    schema:'public',
    paranoid: true,
}

let fields: ModelAttributes = {
    id:{
        type: new DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement:true,
        allowNull: false,
    },
    firstName: {
      type: new DataTypes.STRING,
      allowNull: true,
    },
    lastName: {
        type: new DataTypes.STRING,
        allowNull: true,
    },
    middleName: {
        type: new DataTypes.STRING,
        allowNull: true,
    },
    email: {
        type: new DataTypes.STRING,
        allowNull: true,
    },
    username: {
        type: new DataTypes.STRING,
        allowNull: true,
    },
    password: {
        type: new DataTypes.STRING,
        allowNull: true,
    },
    active: {
        type: new DataTypes.BOOLEAN,
        allowNull: true
    },
    createdAt:{
        type: new DataTypes.DATE,
        allowNull:true,
    },
    updatedAt:{
        type: new DataTypes.DATE,
        allowNull:true,
    },
    deletedAt:{
      type: new DataTypes.DATE,
      allowNull:true,  
    }
}

Users.init(fields, options)
