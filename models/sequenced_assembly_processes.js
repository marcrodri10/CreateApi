'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Sequenced_Assembly_Process extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Sequenced_Assembly_Process.init({
    sequenced_assembly_id: DataTypes.INTEGER,
    machine_id: DataTypes.INTEGER,
    step: DataTypes.INTEGER,
    material_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Sequenced_Assembly_Process',
  });
  return Sequenced_Assembly_Process;
};