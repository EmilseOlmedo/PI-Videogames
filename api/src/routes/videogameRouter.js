const {Router} = require ('express');
const {getVideogames, getVideogamesById} = require('../handlers/videogamesHandler')

const videogameRouter = Router();

videogameRouter.get('/', getVideogames);
videogameRouter.get('/:id', getVideogamesById);
// videogameRouter.post('/', createVideogame);

module.exports= videogameRouter;