'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Sequenced_Assembly extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Sequenced_Assembly.init({
    process_id: DataTypes.INTEGER,
    reps: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Sequenced_Assembly',
  });
  return Sequenced_Assembly;
};