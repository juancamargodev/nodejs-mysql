/***
 * @desc: ARCHIVO PARA MANEJAR LAS RUTAS AGRUPADAS POR SU COMPONENTE
 * @author:
 * @type {Router}
 */

//En este espacio llamamos los archivos network de los componentes (carpeta components)
// que tengamos creados.
const users = require('../components/Users/network');

// Se crea la constante que va a contener todas las rutas que usemos.
// ( ej. para usuarios, /users y las rutas del módulo que estan en el archivo network de cada uno)
const routes = (server) =>{
    server.use('/users',users);
}
// Se exporta el módulo para poder usarlo en archivo index.js y se puedan llamar las rutas
module.exports = routes;
