const {getAllGenres} = require ('../controllers/genresControllers')

const getGenres = async (req, res) => {
    const {genres} = req.body;
    try {
        const allGenre = await getAllGenres(genres)
        res.status(200).json(allGenre);
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

module.exports = {getGenres}