const {apiVideogames} = require ('../Utils/utils');
const {dbVideogames} = require('../Utils/utils');


const getGamesById = async (id) => {
    const source = isNaN(id)? 'db' : 'api';
    // console.log('Estoy en el controller de id:', source)
    try {
        if(source==='api'){
            return (await apiVideogames(id)).find(g=>g.id==id)
            
        }else{
            return (await dbVideogames(id)).find(g=>g.id===id)
        }
        } catch (error) {   
            throw Error ('Error')
        }
    }
  

//OPCIÓN CON TODO ALLVIDEOGAMES
// const getGamesById = async (id) => {
//     try {
//       const games = await getAllVideogames();
//       const searchgames = await games.find((g) => g.id == id);
//       return searchgames;
//     } catch {
//       throw Error(error.message);
//     }
//   };

    
module.exports = {getGamesById}
