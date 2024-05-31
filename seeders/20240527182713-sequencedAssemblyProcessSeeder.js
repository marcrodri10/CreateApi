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
    const csvData = csvToJson.utf8Encoding().getJsonFromCsv(path.join( 'csv', 'Sequenced_machine_assembly.csv'))
    for(let sequenced of csvData){
      await queryInterface.bulkInsert('Sequenced_Assembly_Processes', [{
        sequenced_assembly_id: sequenced.sequenced_assembly_id,
        machine_id: sequenced.machine_id,
        step: sequenced.step,
        material_id: sequenced.material_id,
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
