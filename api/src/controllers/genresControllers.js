const axios = require("axios");
const { Genre } = require("../db");
const { API_KEY } = process.env;


const getAllGenres = async () => {
  try {
    const genresApi = await axios.get(`https://api.rawg.io/api/genres?key=${API_KEY}`);
    // console.log('genresApi', genresApi.data.results)
    const response = genresApi.data.results.map((e) => {
        return {
            name: e.name
        };
    });
    await Genre.bulkCreate(response, { ignoreDuplicates: true });
    const allGenres = await Genre.findAll();
    // console.log('generos db: ', allGenres); //ME LOS TRAE COMPLETO SEQUELIZE**ver abajo
    return allGenres;

  } catch (error) {
      console.error('Error al obtener datos generos de la api: ', error.mesage);
  };
};

module.exports = { 
  getAllGenres,
 
 };

//** */
//  Genre {
//   dataValues: { id: '2e53e8b7-bb54-4444-be88-285b2f6f5aaa', name: 'Simulation' },
//   _previousDataValues: { id: '2e53e8b7-bb54-4444-be88-285b2f6f5aaa', name: 'Simulation' },      
//   uniqno: 1,
//   _changed: Set(0) {},
//   _options: {
//     isNewRecord: false,
//     _schema: null,
//     _schemaDelimiter: '',
//     raw: true,
//     attributes: [Array]
//   },
//   isNewRecord: false
// },