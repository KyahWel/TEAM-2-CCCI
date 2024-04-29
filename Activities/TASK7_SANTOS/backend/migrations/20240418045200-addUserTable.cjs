'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('users', { 
    id: {
      type: new Sequelize.INTEGER,
      allowNull: false,
      primary: true,
      autoIncrement: true,
    },
      firstName: {
      type: new Sequelize.STRING,
      allowNull: true,
    },
    middleName: {
        type: new Sequelize.STRING,
        allowNull: true,
    },
    lastName: {
        type: new Sequelize.STRING,
        allowNull: true,
    },
    email: {
        type: new Sequelize.STRING,
        allowNull: true,
    },
    contactNo: {
        type: new Sequelize.STRING,
        allowNull: true,
    },
    username: {
        type: new Sequelize.STRING,
        allowNull: true,
        unique: true,
    },
    password: {
        type: new Sequelize.STRING,
        allowNull: true,
    },
    avatar: {
        type: new Sequelize.STRING,
        allowNull: true,
    },
    city: {
        type: new Sequelize.STRING,
        allowNull: true,
    },
    state: {
        type: new Sequelize.STRING,
        allowNull: true,
    },
    previousCompanyName: {
        type: new Sequelize.STRING,
        allowNull: true,
    },
    previousWorkTitle: {
        type: new Sequelize.STRING,
        allowNull: true,
    },
    previousWorkLocation: {
        type: new Sequelize.STRING,
        allowNull: true,
    },
    isHired: {
        type: new Sequelize.STRING,
        allowNull: true,
    },
    token: {
        type: new Sequelize.BOOLEAN,
        allowNull: true,
    },
    lastLogin: {
        type: new Sequelize.DATE,
        allowNull: true,
    },
    iamAdmin: {
        type: new Sequelize.BOOLEAN,
        allowNull: true
    },
    loggedIn: {
        type: new Sequelize.BOOLEAN,
        allowNull: true
    },
    active: {
        type: new Sequelize.BOOLEAN,
        allowNull: true
    },
    createdAt: {
        type: new Sequelize.DATE,
        allowNull: true
    },
    updatedAt: {
        type: new Sequelize.DATE,
        allowNull: true
    },

        });
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('users');
    /**
     * Add reverting commands here.
     *
     * Example:
     * 
     */
  }
};
