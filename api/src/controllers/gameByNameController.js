const {getAllVideogames} = require('./allGamesController')

/*------------- OBTENGO VIDEOGAMES por NAME -------------*/
const getVideogamesByName = async (name) =>{
    const allGames = await getAllVideogames();

    try {
        const gameName = allGames.filter ((game)=>game.name.toLowerCase().includes(name.toLowerCase()))
        if (gameName.length>0)
            return gameName.slice(0, 15)
            throw Error ('There are no games with that name');
    } catch (error) {
        throw Error ('Not found');
    }
}

module.exports = {getVideogamesByName}