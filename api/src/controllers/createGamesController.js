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

      const associatedGenres = [];
    // Para cada género, verificar si existe en la base de datos
      for (let genreName of genres) {
        // console.log("Creando género:", genreName);
        const [genre, created] = await Genre.findOrCreate({ where: { name: genreName } });
        // console.log("Genre:", genre); // Verifica el valor de 'genre'
        // console.log("Created:", created); // Verifica el valor de 'created'
      // Asociar el género al videojuego
        await videogameCreate.addGenre(genre);
        // console.log("Género asociado al videojuego:", genre);
        associatedGenres.push(genre.name);
      }
      newGame= {
        id: videogameCreate.id,
        userCreated: true,
        name: videogameCreate.name,
        platforms: videogameCreate.platforms,
        background_image: videogameCreate.background_image,
        description: videogameCreate.description,
        released: videogameCreate.released,
        rating: videogameCreate.rating,
        genres: associatedGenres // Incluir los géneros asociados     
      }
    return newGame
    }
  } catch (error) {
    throw Error (error.message)
  }
}

module.exports = {createVideogames}
