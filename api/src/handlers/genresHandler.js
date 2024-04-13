const {getAllGenres} = require ('../controllers/genresControllers')

const getGenres = async (req, res) => {
    try {
        const allGenres = await getAllGenres()
        res.status(200).send(allGenres);
    } catch (error) {
        res.status(500).json({error: error.message})
    }
}

module.exports = {getGenres}

// try {
//     const allGenres = await getAllGenres()
//     res.status(200).json(allGenres);
// } catch (error) {
//     res.status(500).json({error: error.message})
// }