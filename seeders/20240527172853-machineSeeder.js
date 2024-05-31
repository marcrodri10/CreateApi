'use strict';
let csvToJson = require('convert-csv-to-json');
var path = require('path')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
      const csvData = csvToJson.utf8Encoding().getJsonFromCsv(path.join('csv', 'Machines.csv'));
      for(let machine of csvData){
        await queryInterface.bulkInsert('Machines', [{
          machine_name: machine.machine_name,
          createdAt: new Date(),
          updatedAt: new Date()
        }], {});
      }
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
