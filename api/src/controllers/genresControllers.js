const axios = require("axios");
const { Genre } = require("../db");
const { API_KEY } = process.env;


const getAllGenres = async () => {
  try {
    const resp = await axios.get(`https://api.rawg.io/api/genres?key=${API_KEY}`);
    const genres = await resp.data.results.map((g) => g.name);
    
    genres.map((e) =>
      Genre.findOrCreate({
        where: { name: e },
      })
    );

    const allGenres = await Genre.findAll();
    return allGenres;
  } catch (error) {
    throw Error(error.message);
  }
};

module.exports = { getAllGenres };