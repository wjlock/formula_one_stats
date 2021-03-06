'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class circuit extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.circuit.belongsTo(models.user)
    }
  };
  circuit.init({
    name: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'circuit',
  });
  return circuit;
};