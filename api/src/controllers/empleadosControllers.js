const { Empleado } = require("../db");

// Esta función puede interactuar con el modelo
const createEmpleado = async (Usu_Id, Emp_Cargo
    ) =>  await Empleado.create({Usu_Id, Emp_Cargo});

module.exports = { createEmpleado};