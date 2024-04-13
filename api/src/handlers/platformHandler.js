const {getPlatforms} = require ('../controllers/platformController');

const getAllPlatforms = async (req,res) => {
    try {
        let platforms = await getPlatforms()

        res.status(200).send(platforms)
    } catch (error) {
        res.status(500).send('Error al recibir información de plataformas', error.message)
        console.error('Error en platformsControllers:', error.message)
    }
}

module.exports = {getAllPlatforms}