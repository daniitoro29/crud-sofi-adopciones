const getRolesHandler = (req, res) => {
    const { name } = req.query;
    if (name) res.send(`Quiero buscar todos los roles que se llamen ${name}`);
    else res.send("Quiero enviar todos los roles");
  };
  
  const getRolHandler = (req, res) => {
    const { id } = req.params;
    res.send("Va a enviar el detalle del rol");
  };
  
  const createRolHandler = (req, res) => {
    const {
      Rol_Id,
      Rol_Nombre,
    } = req.body;
    res.send('Estoy por crear un rol con estos datos');
  };
  
  module.exports = {
    getRolesHandler,
    getRolHandler,
    createRolHandler,
  };