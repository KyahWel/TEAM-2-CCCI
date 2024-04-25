'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('users', { 
      id:{
        type: new Sequelize.INTEGER,
        allowNull: false,
        primary: true,
        autoIncrement: true,
      },
      firstName: {
        type: new Sequelize.STRING,
        allowNull: true,
      },
      lastName: {
          type: new Sequelize.STRING,
          allowNull: true,
      },
      username: {
          type: new Sequelize.STRING,
          allowNull: true,
          unique: true,
      },
      contactNo: {
      type: new Sequelize.STRING,
      allowNull: true,
      unique: true,
    },
      email: {
          type: new Sequelize.STRING,
          allowNull: true,
          unique: true,
      },
      password: {
        type: new Sequelize.STRING,
        allowNull: true,
      },
       isAdmin: {
      type: new Sequelize.BOOLEAN,
      allowNull: true,
    },
      avatar: {
      type: new Sequelize.STRING,
      allowNull: true,
     },
     token: {
      type: new Sequelize.STRING,
      allowNull: true,
      },
      
      invalidAttempts: {
        type: new Sequelize.INTEGER,
        allowNull: true,
    },
      lastlogin: {
    type: new Sequelize.DATE,
    allowNull: true,
    },
    active: {
      type: new Sequelize.BOOLEAN,
      allowNull: true
    },
    createdAt:{
      type: new Sequelize.DATE,
      allowNull: true
    },
    updatedAt:{
      type: new Sequelize.DATE,
      allowNull: true
    },
    deletedAt:{
      type: new Sequelize.DATE,
      allowNull: true
    } 
     });
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
