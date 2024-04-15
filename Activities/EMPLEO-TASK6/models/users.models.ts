

import { DataTypes, InitOptions, ModelAttributes, Model, Sequelize } from 'sequelize';
import dotenv from 'dotenv';
dotenv.config();

export default class Users extends Model{
    static readonly modelName:string = 'Users';

    declare firstName: string;
    declare middleName: string;
    declare lastName: string;
    declare email: string;
    declare password: string;
    declare temporaryPassword: string;
    declare avatar: string;
    declare token: string;
    declare lastLogin: Date;
    declare contactNo: string;
    declare invalidAttempts: number;
    declare iamAdmin: boolean;
    declare loggedIn: boolean;
    declare active: boolean;

    static associate() {
      
    }
}

let options: InitOptions = {
    sequelize: new Sequelize(process.env.POSTGRES_URL!),
    tableName: Users.modelName,
    schema:'public'
}

let fields: ModelAttributes = {
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
    password: {
        type: new DataTypes.STRING,
        allowNull: true,
    },
    temporaryPassword: {
        type: new DataTypes.STRING,
        allowNull: true,
    },
    avatar: {
        type: new DataTypes.STRING,
        allowNull: true,
    },
    token: {
        type: new DataTypes.STRING,
        allowNull: true,
    },
    lastLogin: {
        type: new DataTypes.DATE,
        allowNull: true,
    },
    contactNo: {
        type: new DataTypes.STRING,
        allowNull: true,
    },
    invalidAttempts: {
        type: new DataTypes.NUMBER,
        allowNull: true
    },
    iamAdmin: {
        type: new DataTypes.BOOLEAN,
        allowNull: true
    },
    loggedIn: {
        type: new DataTypes.BOOLEAN,
        allowNull: true
    },
    active: {
        type: new DataTypes.BOOLEAN,
        allowNull: true
    }
}

Users.init(fields, options)