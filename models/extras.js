'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Extras extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Extras.init({
    material_id: DataTypes.INTEGER,
    process_id: DataTypes.INTEGER,
    extra_quantity: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Extras',
  });
  return Extras;
};