const { Rol } = require("../db");
 
// Esta función puede interactuar con el modelo
const createRol = async (Rol_Id,Rol_Nombre) => await Rol.create({Rol_Id,Rol_Nombre});

const getAllRoles = async () => await Rol.findAll();
const deleteRolById = async (Rol_Id) => await Rol.destroy({
    where:{
        Rol_Id:Rol_Id
    }
})
module.exports = { createRol, getAllRoles, deleteRolById};