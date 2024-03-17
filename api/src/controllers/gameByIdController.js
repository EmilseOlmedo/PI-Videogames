const {apiVideogames} = require ('../Utils/utils');
const {dbVideogames} = require('../Utils/utils');


const getGamesById = async (id) => { //ME LLEGA UN ARRAY VACIO
    try {
        if (isNaN(id)) {
            const gameIdDb= await dbVideogames();
            const gameDbFilter= await gameIdDb.filter(game=>game.id===id);
            return (gameDbFilter)
            // (gameIdApi) ? gameIdApi : res.send(`That ${id} does not exist`)
            
            // if (gameIdApifilter.length) 
            // console.log(gameIdApifilter)
            // return gameIdApifilter //: res.send(`That ${id} does not exist`)
        } else {
            const gameIdApi= await apiVideogames();
            const gameIdApifilter = gameIdApi.filter((game)=> game.id===id)
            if (gameIdApifilter.length>0){
             return (gameIdApifilter)
             } else {
             throw new Error("No se encontraron juegos con ese ID en la API.")
            // console.log(gameIdApifilter)
            // return (gameIdApifilter)
             }
        }
    } catch (error) {
        throw Error ("Error: Falta el número de ID para buscar. ¡Intenta de nuevo!");
    }
       
    }

    
// const getGamesById = async (id) => {
//     try {
//     if (isNaN(id)) {
//         const gameIdDb= await dbVideogames();
//         const gameDbFilter= gameIdDb.filter(game=>game.id===id);
//         return (gameDbFilter)
//         // (gameIdApi) ? gameIdApi : res.send(`That ${id} does not exist`)
        
//         // if (gameIdApifilter.length) 
//         // console.log(gameIdApifilter)
//         // return gameIdApifilter //: res.send(`That ${id} does not exist`)
//     } else {
//         const gameIdApi= await apiVideogames();
//         const gameIdApifilter = gameIdApi.filter(game=> game.id===id)
//         (gameIdApifilter.lenght>0)
//         ? gameIdApifilter
//         : (error) ('que está pasando')
//         // console.log(gameIdApifilter)
//         // return (gameIdApifilter)

//     }
// } catch (error) {
//     throw Error ("Error: Falta el número de ID para buscar. ¡Intenta de nuevo!");
// }
   
// }

module.exports = {getGamesById}