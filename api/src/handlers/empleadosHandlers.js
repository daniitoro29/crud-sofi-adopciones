const {createEmpleado} = require('../controllers/empleadosControllers');

const createEmpleadoHandler = async (req, res) => {
    const {
      Usu_Id,
      Emp_Cargo,
    } = req.body;
    try {
      const newEmpleado = await createEmpleado(Usu_Id, Emp_Cargo);
      res.send(newEmpleado);
    } catch (error) {
      res.status(400).json({error: error.message});
    }
  };

  module.exports = {createEmpleadoHandler};