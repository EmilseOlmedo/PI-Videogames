const {getAllVideogames} = require ('../controllers/allGamesController')
const {getVideogamesByName} = require ('../controllers/gameByNameController')
const {getGamesById} = require ('../controllers/gameByIdController')


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

module.exports = {
    getVideogames,
    getVideogamesById
}

