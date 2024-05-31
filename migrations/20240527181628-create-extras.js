'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Extras', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      material_id: {
        type: Sequelize.INTEGER,
        references: {         // Agregamos la referencia a la tabla Machines
          model: 'Materials',
          key: 'id'
        },
        onUpdate: 'CASCADE',  // Acción a realizar cuando el id de la máquina asociada se actualiza
        onDelete: 'CASCADE'   // Acción a realizar cuando la máquina asociada es eliminada
      },
      process_id: {
        type: Sequelize.INTEGER
      },
      extra_quantity: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Extras');
  }
};