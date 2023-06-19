const {createPet} = require('../controllers/petsController');

const createPetHandler = async (req,res) => {
    const {Mas_Nombre,
        Mas_Especie,
        Mas_Genero,
        Mas_Raza,
        Mas_Tamano,
        Mas_Descripcion,
        Mas_Foto,
        Mas_Fecha_Rescate,
        Mas_Lugar_Rescate,
        Mas_Edad,
        Mas_Estado_Adopcion} = req.body;
        try {
            const newPet = await createPet(Mas_Nombre,
                Mas_Especie,
                Mas_Genero,
                Mas_Raza,
                Mas_Tamano,
                Mas_Descripcion,
                Mas_Foto,
                Mas_Fecha_Rescate,
                Mas_Lugar_Rescate,
                Mas_Edad,
                Mas_Estado_Adopcion)
            res.send(newPet);
        } catch (error) {
            res.status(400).json({error: error.message});
        }
}

module.exports = {createPetHandler}