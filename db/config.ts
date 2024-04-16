import { Sequelize } from 'sequelize';


const dbName = "postgres";
const dbUserName = "postgres";
const dbpassword = "pass123";
const dbHost = "localhost";
const dbPort = 5432;
const dbDriver = "postgres";

const sequelizeConnection = new Sequelize(dbName, dbUserName, dbpassword, {
    host: dbHost,
    dialect: dbDriver,
    port: dbPort
})

export default sequelizeConnection;