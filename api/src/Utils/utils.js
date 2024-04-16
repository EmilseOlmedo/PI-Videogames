const axios = require ('axios');
const {Videogame, Genre} = require ('../db.js')
// require('dotenv').config();
const { API_KEY } = process.env;
const URL = "https://api.rawg.io/api/games"


/*------ obtengo videogames de DB ----------*/
const dbVideogames = async () =>{
  const allGamesDb= await Videogame.findAll({
      include: [{
          model: Genre,
          attributes: ["name"],
          through: {attributes: []},
        },]
    })

    return allGamesDb.map((e)=>{ //mapeo todos los juegos
      const genre = {               //creo un nuevo objeto con todas las propiedades dataValues
        ...e.dataValues,         //dataValues: propiedad que almacena los valores reales de las columnas del modelo.
        genres: e.Genres.map((g)=>g.name).join(", ") //genres: propiedad del juego donde extraigo los nombres
      };
      delete genre.Genres
      return genre;
    })
}


/*------ obtengo videogames de la API --------*/
const apiVideogames = async () =>{
const allGamesApi = [];
    for (let i = 1; i <= 5; i++) {
      const response = await axios.get (`${URL}?key=${API_KEY}&page=${i}`)
      const videogames = response.data.results.map(game=> ({
        id: game.id,
        name: game.name,
        platforms: game.platforms.map((p) => p.platform.name),
        background_image: game.background_image,
        released: game.released,
        description: game.description,
        genres: game.genres.map((g) => g.name),
        rating: game.rating,
        userCreated: false,
      }));
      allGamesApi.push(...videogames)  
    }

    return allGamesApi;
}

//OBTENGO VIDEOGAMES POR id:
const videogameIdApi = async (id) => {
  const vgApi = [];
  try {
    const resp = await axios.get(
      `https://api.rawg.io/api/games/${id}?key=${API_KEY}`
    );
    
    const dataId = resp.data;
    vgApi.push({
      id: dataId.id,
      name: dataId.name,
      image: dataId.background_image,
      rating: dataId.rating,
      genres: dataId.genres.map((g) => g.name),
      description: dataId.description_raw,
      released: dataId.released,
      platforms: dataId.platforms.map((p) => p.platform.name),
    });
    console.log(vgApi);

    return vgApi;
  } catch (error) {
    throw Error(error.message);
  }
};

module.exports={
    dbVideogames,
    apiVideogames,
    videogameIdApi
}

