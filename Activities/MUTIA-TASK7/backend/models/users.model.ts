import { DataTypes, InitOptions, ModelAttributes, Model, Sequelize } from 'sequelize';
import dotenv from 'dotenv';
dotenv.config();

export default class Users extends Model{
    static readonly modelName:string = 'users';
    declare id: number;
    declare firstName: string;
    declare username: string;
    declare lastName: string;
    declare email: string;
    declare password: string;
    declare avatar: string;
    declare token: string;
    declare lastLogin: Date;
    declare contactNo: string;
    declare invalidAttempts: number;
    declare isAdmin: boolean;
    declare loggedIn: boolean;
    declare active: boolean;
    declare createdAt: Date;
    declare updatedAt: Date;
    declare code: number;
    declare codeExpiresAt: Date;
    declare position: string;
    declare gender: string;
    declare birthday: Date;
    declare age: number;
    declare address: string;
    

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
      schema: 'public',
      paranoid: true,
}

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
          unique: true,
      },
      lastName: {
          type: new DataTypes.STRING,
          allowNull: true,
      },
      email: {
          type: new DataTypes.STRING,
          allowNull: true,
          unique: true,
      },
      password: {
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
      unique: true,
    },
    invalidAttempts: {
        type: new DataTypes.NUMBER,
        allowNull: true,
    },
    isAdmin: {
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
    },
    code: {
      type: new DataTypes.NUMBER,
      allowNull: true,
  },
  codeExpiresAt:{
    type: new DataTypes.DATE,
    allowNull: true
  },
  position: {
    type: new DataTypes.STRING,
    allowNull: true,
  },
  gender: {
    type: new DataTypes.STRING,
    allowNull: true,
  },
  birthday: {
    type: new DataTypes.DATE,
    allowNull: true,
  },
  age: {
    type: new DataTypes.NUMBER,
    allowNull: true,
  },
  address: {
    type: new DataTypes.STRING,
    allowNull: true,
  },
}


Users.init(fields, options)

