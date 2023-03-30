const { Router } = require('express');
const usersRouter = require('./usersRouter.js');
const rolesRouter = require('./rolesRouter');

const mainRouter = Router();

mainRouter.use('/users', usersRouter); // Define la ruta /users en mainRouter

mainRouter.use('/roles', rolesRouter);

module.exports = mainRouter;