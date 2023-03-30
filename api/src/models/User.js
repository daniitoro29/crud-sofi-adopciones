const {DataTypes} = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('usuario', {
        Usu_Id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4, // Para que se genere automáticamente
/*             type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,  */
        },
        Usu_Nombre: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        Usu_Apellido:{
            type: DataTypes.STRING,
            allowNull: false,
        },
        Usu_Telefono: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        Usu_Correo:{
            type: DataTypes.STRING,
            unique: true,
        },
        Usu_Contraseña: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        Usu_Genero: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        Usu_Estado: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    }, {timestamps: false} // Para que no agregue campos de fecha y hora de creación por defecto
    )
}