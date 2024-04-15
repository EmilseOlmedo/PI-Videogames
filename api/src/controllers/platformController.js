const axios = require("axios");
const { API_KEY } = process.env;

const getPlatforms = async () => {
    try {
        let apiPlatforms = await axios.get(`https://api.rawg.io/api/platforms/lists/parents?key=${API_KEY}`);
        let platformsName = apiPlatforms.data.results.map(p => {
            return {
                id:p.id,
                name:p.name
            }
        });

        return platformsName;
        
    } catch (error) {
        throw Error (error.message)
    };
}

module.exports = {getPlatforms}