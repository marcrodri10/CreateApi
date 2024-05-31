'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Processes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Processes.init({
    input_material: DataTypes.INTEGER,
    machine_id: DataTypes.INTEGER,
    output_material: DataTypes.INTEGER,
    probability: DataTypes.INTEGER,
    input_quantity: DataTypes.INTEGER,
    output_quantity: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Processes',
  });
  return Processes;
};