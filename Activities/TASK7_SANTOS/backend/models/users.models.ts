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
    declare username: string;
    declare password: string;
    declare avatar: string;
    declare city: string;
    declare state: string;
    declare previousCompanyName: string;
    declare previousWorkTitle: string;
    declare previousWorkLocation: string;
    declare isHired: boolean;
    declare lastLogin: Date;
    declare contactNo: string;
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
    schema:'public',
    paranoid: true,
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
    middleName: {
        type: new DataTypes.STRING,
        allowNull: true,
    },
    lastName: {
        type: new DataTypes.STRING,
        allowNull: true,
    },
    email: {
        type: new DataTypes.STRING,
        allowNull: true,
    },
    contactNo: {
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
    avatar: {
        type: new DataTypes.STRING,
        allowNull: true,
    },
    city: {
        type: new DataTypes.STRING,
        allowNull: true,
    },
    state: {
        type: new DataTypes.STRING,
        allowNull: true,
    },
    previousCompanyName: {
        type: new DataTypes.STRING,
        allowNull: true,
    },
    previousWorkTitle: {
        type: new DataTypes.STRING,
        allowNull: true,
    },
    previousWorkLocation: {
        type: new DataTypes.STRING,
        allowNull: true,
    },
    isHired: {
        type: new DataTypes.STRING,
        allowNull: true,
    },
    lastLogin: {
        type: new DataTypes.DATE,
        allowNull: true,
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
    },
}

Users.init(fields, options)