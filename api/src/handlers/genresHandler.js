const {getAllGenres} = require ('../controllers/genresControllers')

const getGenres = async (req, res) => {
    try {
        let allGenres = await getAllGenres()

        res.status(200).send(allGenres);
    } catch (error) {
        // console.error('Error en genresHandler:')
        res.status(500).json({error: error.message})
    }
}

module.exports = {getGenres}
