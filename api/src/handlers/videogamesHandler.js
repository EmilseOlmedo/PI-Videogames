const {getAllVideogames} = require ('../controllers/allGamesController')
const {getVideogamesByName} = require ('../controllers/gameByNameController')
const {getGamesById} = require ('../controllers/gameByIdController')
const {createVideogames} = require ('../controllers/createGamesController')


const getVideogames = async(req, res) => {
    const {name} = req.query;
    try {
        const videogames = (name) ? await getVideogamesByName(name) : await getAllVideogames() 
        res.status(200).json(videogames);
    } catch (error) {
        res.status(500).json({error: error.message})
    }
};


const getVideogamesById = async (req, res) => {
    const {id} = req.params;
    try {
        const gamesId = await getGamesById(id)
        res.status(200).json(gamesId);
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}


const postVideogames = async(req, res) => {
    const {
        name,
        platforms,
        background_image,
        description,
        released,
        rating,
        genres} = req.body;
        
    try {
        const newGame = await createVideogames(
            {
                name,
                platforms, 
                background_image, 
                description,
                released, 
                rating, 
                genres
            });

        res.status(201).json({message: "The videogame was successfully created", newGame})
    } catch (error) {
        // console.error('Error creating video game:', error);
        res.status(500).json({error: 'entró acá'})
    }
}


module.exports = {
    getVideogames,
    getVideogamesById,
    postVideogames
}
//*FRANCO
// const { Videogame } = require("../db");

// const createGame = async (req, res) => {
//   const {
//     name,
//     released,
//     rating_top,
//     playtime,
//     esrb_rating,
//     genreIds,
//     background_image,
//   } = req.body;

//   try {
//     if (
//       !name ||
//       !released ||
//       !rating_top ||
//       !playtime ||
//       !esrb_rating ||
//       !genreIds ||
//       !background_image
//     ) {
//       return res.status(400).json({ error: "Missing data" });
//     }
//     const getRandomInt = (max = 100) => {
//       return Math.floor(Math.random() * max);
//     };
//     const gameForRedux = {
//       id: getRandomInt(),
//       name,
//       released,
//       rating: rating_top,
//       rating_top,
//       playtime,
//       esrb_rating,
//       genreIds,
//       background_image,
//     }
 
//     const game = await Videogame.create({
//       id: getRandomInt(),
//       name,
//       released,
//       rating: rating_top,
//       playtime,
//       rating_top,
//       esrb_rating,
//       background_image,
//     });


//     game.addGenres(genreIds);

//     res.status(201).json(gameForRedux);
//   } catch (error) {
//     res.status(500).json({ error: error.message });
//   }
// };

// module.exports = createGame;