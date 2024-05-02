import { DataTypes, InitOptions, ModelAttributes, Model, Sequelize } from 'sequelize';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

// Define the Users model class
export default class Users extends Model{
    // Define model name
    static readonly modelName:string = 'users';
    
    // Define model attributes
    declare id: number;
    declare firstName: string;
    declare username: string;
    declare lastName: string;
    declare email: string;
    declare password: string;
    declare temporaryPassword: string;
    declare avatar: string;
    declare token: string;
    declare lastLogin: Date;
    declare contactNo: string;
    declare invalidAttempts: number;
    declare code: number;
    declare iamAdmin: boolean;
    declare loggedIn: boolean;
    declare active: boolean;
    declare createdAt: Date;
    declare updatedAt: Date;
   
    // Define model associations
    static associate() {
        // Define associations if any
    }
}

// Define Sequelize initialization options
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
    schema: 'public',
    paranoid: true,  
}

// Define model attributes and types
let fields: ModelAttributes = {
    id:{
        type: new DataTypes.NUMBER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
    },
    firstName: {
        type: new DataTypes.STRING,
        allowNull: true,
    },
    username: {
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
    lastlogin: {
        type: new DataTypes.DATE,
        allowNull: true,
    },
    contactNo: {
        type: new DataTypes.STRING,
        allowNull: true,
    },
    invalidAttempts: {
        type: new DataTypes.NUMBER,
        allowNull: true,
    },
    code: {
        type: new DataTypes.NUMBER,
        allowNull: true,
    },
    iamAdmin: {
        type: new DataTypes.BOOLEAN,
        allowNull: true,
    },
    active: {
        type: new DataTypes.BOOLEAN,
        allowNull: true
    },
    createdAt:{
        type: new DataTypes.DATE,
        allowNull: true
    },
    updatedAt:{
        type: new DataTypes.DATE,
        allowNull: true
    },
    deletedAt:{
        type: new DataTypes.DATE,
        allowNull: true
    }
}

// Initialize the Users model with attributes and options
Users.init(fields, options)
