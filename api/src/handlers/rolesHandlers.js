const {createRol, getAllRoles, deleteRolById} = require('../controllers/rolesControllers');

const getRolesHandler = async (req, res) => {
    try {
      const allRoles = await getAllRoles();
      res.json(allRoles);
    } catch (error) {
      res.status(400).json({error: error.message});
    }
  };
  
  const createRolHandler = async (req, res) => {
    const {
      Rol_Id,
      Rol_Nombre,
    } = req.body;
    try {
      const newRol = await createRol(Rol_Id, Rol_Nombre);
      res.send(newRol);
    } catch (error) {
      res.status(400).json({error: error.message});
    }
  };
  
  const deleteRolHandler = async (req, res) => {
    const {
      id,
    } = req.params
    try {
      const deleteRol = await deleteRolById(id);
      res.send(deleteRol);
    } catch (error) {
      res.status(400).json({error: error.message});
    }
  }
  
  module.exports = {
    getRolesHandler,
    createRolHandler,
    deleteRolHandler,
  };