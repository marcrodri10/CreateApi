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
    const csvData = csvToJson.utf8Encoding().getJsonFromCsv(path.join('csv', 'Extras.csv'))
    for(let extra of csvData){
      await queryInterface.bulkInsert('Extras', [{
        material_id: extra.material_id,
        process_id: extra.process_id,
        extra_quantity: extra.extra_quantity,
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
