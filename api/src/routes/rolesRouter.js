const { Router } = require('express');

const rolesRouter = Router();
const {   getRolesHandler,
    getRolHandler,
    createRolHandler} = require('../handlers/rolesHandlers');

rolesRouter.get('/',getRolesHandler)

rolesRouter.get('/:id', getRolHandler)

rolesRouter.post('/', createRolHandler)

module.exports = rolesRouter;