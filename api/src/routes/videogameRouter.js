const {Router} = require ('express');
const {getVideogames} = require('../handlers/videogamesHandler')

const videogameRouter = Router();

videogameRouter.get('/', getVideogames);
// videogameRouter.get('/:idVideogame', getVideogameById);
// videogameRouter.post('/', createVideogame);

module.exports= videogameRouter;