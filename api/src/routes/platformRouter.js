const {Router} = require ('express');
const { getAllPlatforms } = require ('../handlers/platformHandler');

const platformRouter = Router()

platformRouter.get("/", getAllPlatforms);

module.exports = platformRouter; 