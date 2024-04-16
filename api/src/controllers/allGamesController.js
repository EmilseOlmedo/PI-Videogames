const {dbVideogames, apiVideogames} = require ('../Utils/utils')

const getAllVideogames = async () => {
  try {
  const allApiGames = await apiVideogames();
  // console.log('ver que me llega de la api y de la bd: ', allApiGames);
  const allDbGames = await dbVideogames();
  console.log('ver que me llega de la bd: ', allDbGames)
  const allVideogames = [...allApiGames, ...allDbGames]

  if (allVideogames.length === 0) 
    throw Error ('Game not found');
  return allVideogames
  } catch {
    console.log('error en getallvideogames')
    throw Error ('error.message');
  }
}

module.exports = {getAllVideogames}

  // const allVideogames = allApiGames.concat(allDbGames);
  // return allVideogames;


