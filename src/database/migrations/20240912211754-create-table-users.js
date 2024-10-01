'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('users', { 
      id:{
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      firstName:{
        type: Sequelize.STRING(40)
      },
      lastName:{
        type: Sequelize.STRING(40)
      },
      email:{
        type:Sequelize.STRING(100),
        allowNull: false,
        unique: true
      },
      password_hash:{
        type: Sequelize.STRING(255),
        allowNull:false
      },
      created_at:{
        allowNull:false,
        type: Sequelize.DATE,
      },
      updated_at:{
        allowNull: false,
        type: Sequelize.DATE,
      }
    });
  },

  async down (queryInterface) {
    await queryInterface.dropTable('users');
  }
};
