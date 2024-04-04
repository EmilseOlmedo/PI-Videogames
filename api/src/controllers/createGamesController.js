const {Genre, Videogame} = require ('../db');
const {getAllVideogames} = require ('../controllers/allGamesController')


const createVideogames = async (
  {
    name,
    platforms,
    background_image,
    description,
    released,
    rating,
    genres
  }
) => {
  try {
    if (!name || !description || !rating) 
    return { error: 'Missing data' }

    //verifico que no exista
    const videogameExist = (await getAllVideogames(name)).find(game => game.name == name);
    if (videogameExist) { 
      return {error:'The videogame already exists'}
    } else {
      const videogameCreate = await Videogame.create ({  //create: crea un {} con el prototipo de videogame
        name,
        platforms,
        background_image,
        description,
        released,
        rating,
       
      });
//     if (background_image) defaults.background_image = background_image; 

    // Para cada género, verificar si existe en la base de datos
      for (let genreName of genres) {
        const [genre, created] = await Genre.findOrCreate({ where: { name: genreName } });

      // Asociar el género al videojuego
        await videogameCreate.addGenre(genre);
      }
      return videogameCreate
    }
  } catch (error) {
    throw Error (error.message)
  }
}

module.exports = {createVideogames}
