const {Router} = require ('express');
const {getVideogames, getVideogamesById, postVideogames} = require('../handlers/videogamesHandler')

const videogameRouter = Router();

videogameRouter.get('/', getVideogames);
videogameRouter.get('/:id', getVideogamesById);
videogameRouter.post('/', postVideogames);

module.exports= videogameRouter;