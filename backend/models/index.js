'use strict';

// Import required modules
const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
const process = require('process');

// Define base filename
const basename = path.basename(__filename);

// Set environment variable for development
const env = process.env.NODE_ENV || 'development';

// Load database configuration from config.json file
const config = require(__dirname + '/../config/config.json')[env];

// Initialize database object
const db = {};

// Initialize Sequelize instance
let sequelize;
if (config.use_env_variable) {
  sequelize = new Sequelize(process.env[config.use_env_variable], config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

// Read all files in current directory except the current file and test files
fs
  .readdirSync(__dirname)
  .filter(file => {
    return (
      file.indexOf('.') !== 0 &&
      file !== basename &&
      file.slice(-3) === '.js' &&
      file.indexOf('.test.js') === -1
    );
  })
  .forEach(file => {
    // Import each model file and initialize with Sequelize instance
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes);
    // Add model to database object
    db[model.name] = model;
  });

// Associate models if association method is defined
Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db);
  }
});

// Assign sequelize and Sequelize instances to db object
db.sequelize = sequelize;
db.Sequelize = Sequelize;

// Export the db object
module.exports = db;
