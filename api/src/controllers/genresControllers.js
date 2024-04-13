const axios = require("axios");
const { Genre } = require("../db");
const { API_KEY } = process.env;


const getAllGenres = async () => {
  try {
    const resp = await axios.get(`https://api.rawg.io/api/genres?key=${API_KEY}`);
    const genres = await resp.data.results.map((g) => g.name);
    
    // Crear un conjunto (Set) para almacenar los nombres únicos de los géneros
    const uniqueGenres = new Set(genres);

    // Recorrer el conjunto de géneros únicos y crearlos en la base de datos
    await Promise.all([...uniqueGenres].map(async (name) => {
      await Genre.findOrCreate({ where: { name } });
    }));

    const allGenres = await Genre.findAll();
    return allGenres;
  } catch (error) {
    throw Error(error.message);
  }
};

module.exports = { getAllGenres };