/**
 * @desc: ARCHIVO QUE FUNCIONA COMO INTERMEDIARIO ENTRE LAS RUTAS Y LA BASE DE DATOS
 * EN EL CONTROLADOR PODEMOS IMPLEMENTAR CAPAS DE SEGURIDAD, MULTIPLES CONEXIONES A DIFERENTES
 * BASES DE DATOS, SOCKETS, ETC.
 * @type {{getUsers: function(): Promise<*>}|{getUsers?: function(): Promise<*>}}
 */

// Llamamos el archivo que contiene las consultas a la base de datos
const store = require('./store');

//Creamos una función asíncrona que retorna el listado de usuarios (READ)
//TODO: hacer lo mismo para lo demás elementos del CRUD (CREATE, UPDATE, DELETE)
async function getUsers(){
    return await store.getUsers(); //usamos el método del store para obtener el listado de usuarios
}

async function addUser(data){
    //TODO: terminar método (revisar getUsers)
}

async function updateUser(idUser,data){
    //TODO: terminar método (revisar getUsers)
}

async function deleteUser(idUser,data){
    //TODO: terminar método (revisar getUsers)
}

//Exportamos las funciones para poder llamarlas en las rutas
module.exports = {
    getUsers,
    addUser,
    updateUser,
    deleteUser
}
