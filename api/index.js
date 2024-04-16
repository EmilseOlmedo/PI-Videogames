//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const server = require('./src/app.js');
const { getAllGenres } = require('./src/controllers/genresControllers.js');
const { conn } = require('./src/db.js');

// Syncing all the models at once.--->Sincronizando todas las modelos a la vez.
conn.sync({ alter: true }).then(() => {
  getAllGenres();
  server.listen(3001, () => {
    console.log('%s listening at 3001'); // eslint-disable-line no-console
  });
});


//SINCRONIZACIÓN DE MODELOS:
/*User.sync()- Esto crea la tabla si no existe (y no hace nada si ya existe)
User.sync({ force: true })- Esto crea la tabla, eliminándola primero si ya existía.
User.sync({ alter: true })- Esto verifica cuál es el estado actual de la tabla en la
base de datos (qué columnas tiene, cuáles son sus tipos de datos, etc.) y luego realiza
 los cambios necesarios en la tabla para que coincida con el modelo.*/

 //SINCRONIZACIÓN DE TODOS LOS MODELOS A LA VEZ
 /*conn.sync({ force: true })*/