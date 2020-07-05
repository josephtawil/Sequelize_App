'use strict';

const { query } = require("express");
const { STRING } = require("sequelize");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
    await queryInterface.createTable('done', { completed: Sequelize.BOOLEAN });
    await queryInterface.createTable("student", { fname: Sequelize.STRING });
    await queryInterface.addColumn("Todos", "text", { type: Sequelize.STRING, allowNull: false });
    await queryInterface.renameColumn("Todos", "text", "word");
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    await queryInterface.dropTable('done');
    await queryInterface.renameColumn("Todos", "word", "text");

  }
};
