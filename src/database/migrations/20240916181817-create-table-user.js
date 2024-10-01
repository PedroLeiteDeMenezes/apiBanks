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
      cpf: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      date_of_birth: {
        type: Sequelize.DATE,
        allowNull: false
      },
      address: {
        type: Sequelize.STRING,
        allowNull: true
      },
      phone: {
        type: Sequelize.STRING,
        allowNull: true
      },
      account_type: {
        type: Sequelize.STRING,
        allowNull: false
      },
      account_number: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      agency: {
        type: Sequelize.STRING,
        allowNull: false
      },
      balance: {
        type: Sequelize.DECIMAL(10, 2),
        allowNull: false,
        defaultValue: 0.00
      },
      status: {
        type: Sequelize.STRING,
        allowNull: false,
        defaultValue: 'active'
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: Sequelize.NOW
      }
    });
  },

  async down (queryInterface) {
    await queryInterface.dropTable('users');
  }
};
