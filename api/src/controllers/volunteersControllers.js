const { Voluntario } = require("../db");
 

const createVolunteer = async (Vol_Tipo_Ayuda, Vol_Fecha_Ayuda,Usu_Id) => await Voluntario.create({Vol_Tipo_Ayuda, Vol_Fecha_Ayuda,Usu_Id});

module.exports = { createVolunteer};