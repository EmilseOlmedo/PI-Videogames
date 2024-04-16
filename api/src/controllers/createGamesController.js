const {Genre, Videogame} = require ('../db.js');
const {getAllVideogames} = require ('../controllers/allGamesController')

const createVideogames = async (
  { name,
    platforms,
    background_image,
    description,
    released,
    rating,
    genres}) => {
  try {
    //verifico que no exista
    // const videogameExist = (await getAllVideogames(name)).find(game => game.name == name);
    // if (videogameExist) { 
    //   return {error:'The videogame already exists'}
    // } else {
    const videogameCreate = await Videogame.create ({  //create: crea un {} con el prototipo de videogame
        name,
        description,
        platforms,
        background_image,
        released,
        rating,
      });
      const genreDb = await Genre.findAll({
         where: { name: genres }
        })        
      // console.log('estoy en create:', videogameCreate)
    videogameCreate.addGenre(genreDb)

    return videogameCreate;

  } catch (error) {
    throw Error ('error al crear el videogame')
  }
}

module.exports = {createVideogames};


// const createVideogames = async (
//   {name,
//     platforms,
//     background_image,
//     description,
//     released,
//     rating,
//     genres}) => {
//   try {
//     //verifico que no exista
//     const videogameExist = (await getAllVideogames(name)).find(game => game.name == name);
//     if (videogameExist) { 
//       return {error:'The videogame already exists'}
//     } else {
//     const videogameCreate = await Videogame.create ({  //create: crea un {} con el prototipo de videogame
//         name,
//         description,
//         platforms,
//         background_image,
//         released,
//         rating,
//       });

//     // Para cada género, verificar si existe en la base de datos
//     // for (let nameGenre of genres) {
//       // Buscar el género
//       // const genreVideogameCreate = genres.map ((g))
//       if (genres.length){
//         genres.map ((g)=> {const genreVideogameCreate = await Genre.findOrCreate({ 
//         where: { name: g }})
    
//       console.log(genreVideogameCreate)
//       videogameCreate.addGenre(genreVideogameCreate)
//       // Si no se encuentra, crearlo
//       // if (!genre) {
//       //   genre = await Genre.create({ name: nameGenre });
//       // }

//       // Asociar el género al videojuego
//       // await videogameCreate.addGenre(genre);
//       // return newGame
//     // }
    
//   } catch (error) {
//     throw Error ('error al crear el videogame')
//   }
// }}

// module.exports = {createVideogames};