const { Router } = require('express');

const rolesRouter = Router();
const {   getRolesHandler,
    createRolHandler, deleteRolHandler} = require('../handlers/rolesHandlers');

rolesRouter.get('/',getRolesHandler)

//rolesRouter.get('/:id', getRolHandler)

rolesRouter.post('/', createRolHandler);
rolesRouter.delete('/:id', deleteRolHandler);
module.exports = rolesRouter;