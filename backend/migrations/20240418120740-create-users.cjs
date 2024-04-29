'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      usertype: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      firstName: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      lastName: {
          type: Sequelize.STRING,
          allowNull: true,
      },
      middleName: {
          type: Sequelize.STRING,
          allowNull: true,
      },
      email: {
          type: Sequelize.STRING,
          allowNull: true,
      },
      username: {
          type: Sequelize.STRING,
          allowNull: true,
      },
      password: {
          type: Sequelize.STRING,
          allowNull: true,
      },
      createdAt:{
          type: Sequelize.DATE,
          allowNull:true,
      },
      updatedAt:{
          type: Sequelize.DATE,
          allowNull:true,
      },
      deletedAt:{
        type: Sequelize.DATE,
        allowNull:true,  
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Users');
  }
};