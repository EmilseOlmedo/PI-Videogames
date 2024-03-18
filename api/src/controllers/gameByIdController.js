const {apiVideogames} = require ('../Utils/utils');
const {dbVideogames} = require('../Utils/utils');

const getGamesById = async (id) => {
    const source = isNaN(id)? 'db' : 'api';
    try {
        if(source==='api'){
            return (await apiVideogames(id)).find(g=>g.id==id)
        }else{
            return (await dbVideogames(id)).find(g=>g.id==id)
        }
        } catch (error) {   
            throw Error ('Error')
        }
}


//     try {
//         const allGames= await getAllVideogame();
//         const gameFind= await allGames.find(game=>game.id==id)
//         if (gameFind){
//             console.log('acá')
//             return gameFind
//         } else { 
//             console.log('o acáaaaaa')
//             return ('No existe este id')

//         }
//     } catch (error) {
//         throw Error ("Error: Falta el número de ID para buscar. ¡Intenta de nuevo!");
//     }
// }


// const getGamesById = async (id) => { //ME LLEGA UN ARRAY VACIO
    // try {
    //     if (isNaN(id)) {
    //         const gameIdDb= await dbVideogames().find(game=>game.id===id);
            // const gameDbFilter= await gameIdDb.find(game=>game.id===idVideogame);
            // return (gameIdDb)
            // (gameDbFilter) ? gameDbFilter : res.send(`That ${id} does not exist`)
            
            // if (gameIdApifilter.length) 
            // console.log(gameIdApifilter)
            // return gameIdApifilter //: res.send(`That ${id} does not exist`)
        // } else {
        //     const gameIdApi= await apiVideogames().find((game)=> game.id===id)
        //     console.log (gameIdApi)
            // const gameIdApifilter = await gameIdApi.find((game)=> game.id===idVideogame)
            // console.log(gameIdApifilter)
            // if (gameIdApifilter.length>0){
            //  return (gameIdApi)
            // //  } else {
            //  throw new Error("No se encontraron juegos con ese ID en la API.")
            // // console.log(gameIdApifilter)
            // // return (gameIdApifilter)
            //  }
    //     }
    // } catch (error) {
    //     throw Error ("Error: Falta el número de ID para buscar. ¡Intenta de nuevo!");
    // }

    // }

    
module.exports = {getGamesById}
