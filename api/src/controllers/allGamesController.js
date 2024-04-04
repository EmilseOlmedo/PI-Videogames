const {dbVideogames, apiVideogames} = require ('../Utils/utils')

const getAllVideogames = async () => {
  try {
  const allApiGames = await apiVideogames();
  const allDbGames = await dbVideogames();

  const allVideogames = [...allApiGames, ...allDbGames]

  if (allVideogames.length === 0) 
    throw Error ('Game not found');
  return allVideogames
  } catch {
    throw Error ('error.message');
  }
}

module.exports = {getAllVideogames}

  // const allVideogames = allApiGames.concat(allDbGames);
  // return allVideogames;


