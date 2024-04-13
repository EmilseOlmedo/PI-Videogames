const { Router } = require('express');
const videogameRouter = require('./videogameRouter');
const genreRouter = require('./genreRouter');
const platformRouter = require('./platformRouter'); 
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

router.use('/videogames', videogameRouter)
router.use('/genres', genreRouter)
router.use('/platforms', platformRouter)

module.exports = router;













//********************************** */
//📍 GUILLE
// const express = require("express");
// const getGenres = require("../controllers/getGenres");
// const postVideogame = require("../controllers/postVideogame");
// const getVideogameById = require("../controllers/getVideogameById");
// const getVideogames = require("../controllers/getVideogames");
// const deleteVideogame = require("../controllers/deleteVideogame");
// const updateVideogame = require("../controllers/updateVideogame");

// const router = express.Router();

// router.get("/videogames", getVideogames);
// router.get("/videogames/:idVideogame", getVideogameById);
// router.post("/videogames", postVideogame);
// router.get("/genres", getGenres);
// //Rutas extras
// router.delete("/videogames/:idVideogame", deleteVideogame);
// router.put("/videogames", updateVideogame);

// module.exports = router;

//*************** */
//📍 TAAAAAA
// const { Router } = require('express');
// const getGameById = require('../controllers/getGameById');
// const getGames = require('../controllers/getGames');
// const login = require('../controllers/login');
// const postUser = require('../controllers/postUser');
// const createGame = require('../controllers/createGame');
// const getGenres = require('../controllers/getGenres');

// const router = Router();


// router.get('/detail/:id', getGameById); 
// router.get('/login', login); 
// router.get('/home', getGames);
// router.get('/genres', getGenres);
// router.post('/register', postUser); 
// router.post('/createGame', createGame); 


// module.exports = router;