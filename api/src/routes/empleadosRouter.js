const { Router } = require('express');
const empleadosRouter = Router();
const {
    createEmpleadoHandler
} = require('../handlers/empleadosHandlers');
empleadosRouter.post('/', createEmpleadoHandler);

module.exports = empleadosRouter;