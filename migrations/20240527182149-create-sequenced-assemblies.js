'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Sequenced_Assemblies', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      process_id: {
        type: Sequelize.INTEGER,
        references: {         // Agregamos la referencia a la tabla Machines
          model: 'Processes',
          key: 'id'
        },
        onUpdate: 'CASCADE',  // Acción a realizar cuando el id de la máquina asociada se actualiza
        onDelete: 'CASCADE'   // Acción a realizar cuando la máquina asociada es eliminada
      },
      reps: {
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
    await queryInterface.dropTable('Sequenced_Assemblies');
  }
};