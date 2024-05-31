'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Sequenced_Assembly_Processes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      sequenced_assembly_id: {
        type: Sequelize.INTEGER,
        references: {         // Agregamos la referencia a la tabla Machines
          model: 'Sequenced_Assemblies',
          key: 'id'
        },
        onUpdate: 'CASCADE',  // Acción a realizar cuando el id de la máquina asociada se actualiza
        onDelete: 'CASCADE'   // Acción a realizar cuando la máquina asociada es eliminada
      },
      machine_id: {
        type: Sequelize.INTEGER,
        references: {         // Agregamos la referencia a la tabla Machines
          model: 'Machines',
          key: 'id'
        },
        onUpdate: 'CASCADE',  // Acción a realizar cuando el id de la máquina asociada se actualiza
        onDelete: 'CASCADE'   // Acción a realizar cuando la máquina asociada es eliminada
      },
      step: {
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
    await queryInterface.dropTable('Sequenced_Assembly_Processes');
  }
};