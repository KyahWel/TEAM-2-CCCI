import { DataTypes, InitOptions, ModelAttributes, Model, Sequelize } from 'sequelize';
import dotenv from 'dotenv';
dotenv.config();

export default class Users extends Model{
    static readonly modelName:string = 'users';

    declare id: number;
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
    declare createdAt: Date;
    declare updatedAt: Date;

    static associate() {
      
    }
}
let options: InitOptions = {
    sequelize: new Sequelize({
        dialect: "postgres",
        host: process.env.HOST,
        port: Number(process.env.PORT),
        database: process.env.DATABASE,
        username: process.env.USER,
        password:process.env.PASSWORD,
    }),
    tableName: Users.modelName,
    schema:'public'
}

let fields: ModelAttributes = {
    id: {
      type: new DataTypes.NUMBER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
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
    },
    createdAt: {
        type: new DataTypes.DATE,
        allowNull: true
    },
    updatedAt: {
        type: new DataTypes.DATE,
        allowNull: true
    }
}

Users.init(fields, options)