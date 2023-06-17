const { Router } = require('express');
const usersRouter = require('./usersRouter.js');
const rolesRouter = require('./rolesRouter');
const empleadosRouter = require('./empleadosRouter');
const volunteersRouter = require('./volunteersRouter');

const mainRouter = Router();

mainRouter.use('/users', usersRouter); 
mainRouter.use('/roles', rolesRouter);
mainRouter.use('/voluntarios', volunteersRouter)
mainRouter.use('/empleados', empleadosRouter);

module.exports = mainRouter;