const {createVolunteer} = require('../controllers/volunteersControllers');
  
  const createVolunteerHandler = async (req, res) => {
    const {
       Vol_Tipo_Ayuda, Vol_Fecha_Ayuda, Usu_Id
    } = req.body;
    try {
      const newVolunteer = await createVolunteer(Vol_Tipo_Ayuda, Vol_Fecha_Ayuda, Usu_Id);
      res.send(newVolunteer);
    } catch (error) {
      res.status(400).json({error: error.message});
    }
  };
  
  module.exports = {
    createVolunteerHandler
  };