'use strict';
let csvToJson = require('convert-csv-to-json');
var path = require('path')
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    const csvData = csvToJson.utf8Encoding().getJsonFromCsv(path.join('csv', 'Processes.csv'))
    for(let process of csvData){
      await queryInterface.bulkInsert('Processes', [{
        input_material: process.input_material,
        machine_id: process.machine_id,
        output_material: process.output_material,
        probability: process.probability,
        input_quantity: process.input_quantity,
        output_quantity: process.output_quantity,
        createdAt: new Date(),
        updatedAt: new Date()
      }], {});
    }
  },
  

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
