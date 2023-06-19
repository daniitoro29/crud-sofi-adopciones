const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('gestion', {
    Emp_Id: {
        type: DataTypes.UUID,
    },
    Mas_Id: {
        type: DataTypes.UUID,
    },
    Ges_Fecha:{
        type: DataTypes.DATE,
        allowNull: false,
    },
    Ges_Observaciones:{
        type: DataTypes.TEXT,
        allowNull: false,
    }
  }, {timestamps: false});
};