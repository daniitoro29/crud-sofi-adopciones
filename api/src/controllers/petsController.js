const { Mascota } = require("../db");

const createPet = async (
 Mas_Nombre,
 Mas_Especie,
 Mas_Genero,
 Mas_Raza,
 Mas_Tamano,
 Mas_Descripcion,
 Mas_Foto,
 Mas_Fecha_Rescate,
 Mas_Lugar_Rescate,
 Mas_Edad,
 Mas_Estado_Adopcion
) =>
 await Mascota.create({
  Mas_Nombre,
  Mas_Especie,
  Mas_Genero,
  Mas_Raza,
  Mas_Tamano,
  Mas_Descripcion,
  Mas_Foto,
  Mas_Fecha_Rescate,
  Mas_Lugar_Rescate,
  Mas_Edad,
  Mas_Estado_Adopcion,
 });

module.exports = {createPet};
