// const axios = require ('axios');
// const {Videogame, Genre} = require ('../db');
const {getAllVideogames} = require('./allGamesController')

//📍 UTILIZAR MÉTODO PARA EVITAR CARGA DE DUPLICADOS
/*------------- OBTENGO VIDEOGAMES por NAME -------------*/
const getVideogamesByName = async (name) =>{
    const allGames = await getAllVideogames();
    // try {
        const nameLower = name.toLowerCase()
        const gameName = allGames.filter ((game)=>game.name.toLowerCase().include(nameLower))
        if (gameName.length>15) { 
            return gameName.slice(0, 15)}
        // if (gameName.length>15) {}
        // } else {
            throw Error ('There are no games with that name');
    // } catch (error) {
    //     throw Error ('no funciona');
    }

// }

module.exports = {getVideogamesByName}
//controlo en mi BD
// const dbGameName = await Videogame.findAll({
//     where: query,
//     include: {
//         model: Genre,
//         attributes: ['name'],
//         through: {
//             attributes: []
//         }
//     }
// });
// return dbGameName;

// const apiGameName = await 

