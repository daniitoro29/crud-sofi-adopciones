const { Router } = require('express');

const petsRouter = Router();
const {createPetHandler } = require('../handlers/petsHandlers');


petsRouter.post('/', createPetHandler);

module.exports = petsRouter;