const axios = require ('axios');
const {Videogame, Genre} = require ('../db')
// require('dotenv').config();
const { API_KEY } = process.env;
const URL = "https://api.rawg.io/api/games"


/*------ obtengo videogames de DB ----------*/
const dbVideogames = async () =>{
  const allGamesDb= await Videogame.findAll(
    {
      include: [
        {
          model: Genre,
          attributes: ["name"],
          through: {attributes: []},
        },
      ],
    })
    
    return allGamesDb;
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
        genres: game.genres.map((g) => g.name),
        rating: game.rating,
        userCreated: false,
      }));
      allGamesApi.push(...videogames)  
    }
    return allGamesApi;
}

module.exports={
    dbVideogames,
    apiVideogames,
}