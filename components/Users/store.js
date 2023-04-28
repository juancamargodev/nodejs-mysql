/**
 * @desc: ARCHIVO QUE MANEJA LA CAPA DE DATOS (CONSULTAS)
 * @type {Mysql}
 */

//Se llama el módulo para la conexión a la base de datos
const Mysql = require('../../mysql');

//Función asíncrona para obtener el listado de usuarios
//TODO: hacer lo mismo para lo demás elementos del CRUD (CREATE, UPDATE, DELETE), tienes que crear las funciones.
async function getUsers(){
    const mysql = new Mysql; // 1. se instancia la clase
    let conn = await mysql.connection(); //2. se establece la conexión
    const [users, fields] = await conn.query('SELECT * FROM Users'); //Se realizan la consulta
    return users; // se retorna la consulta
}

//Exportamos las funciones para poder ser utilizadas en el controlador
module.exports = {
    getUsers
}
