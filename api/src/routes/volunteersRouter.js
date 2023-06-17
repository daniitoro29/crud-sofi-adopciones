const { Router } = require('express');
const volunteersRouter = Router();
const { 
    createVolunteerHandler
} = require('../handlers/volunteersHandlers');

// volunteersRouter.get('/', getUsersHandler);
volunteersRouter.post('/', createVolunteerHandler);
// volunteersRouter.get('/:id', getUserHandler);
// volunteersRouter.put('/:id', updateUserHandler);
//volunteersRouter.delete('/:id', deleteUserHandler);

module.exports = volunteersRouter;