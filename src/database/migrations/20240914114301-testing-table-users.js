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
      first_name:{
        type: Sequelize.STRING(40)
      },
      last_name:{
        type: Sequelize.STRING(40)
      },
      email:{
        type:Sequelize.STRING(100),
        allowNull: false,
        unique: true
      },
      password_hash:{
        type: Sequelize.STRING(255),
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
