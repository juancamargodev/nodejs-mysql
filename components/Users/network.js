/**
 * @desc: CAPA DE RED DEL COMPONENTE. SU FUNCIÓN ES MANEJAR TODAS LAS CONSULTAS QUE PUEDAN
 * LLEGAR AL COMPONENTE Y MANEJARLAS SEGÚN LO QUE NECESITE EL USUARIO (GET, POST, PUT, DELETE)
 * @type {e | (() => Express)}
 */

const express = require('express');// 1. generamos uns instancia de express
const response = require('../../network/response'); // 2. llamamos las respuestas que puede dar el servidor
const router = express.Router(); //3. llamamos el método Router de express para poder manejar la rutas
const controller = require('./controller'); // llamamos el controlador del componente (en este caso el de Users)

//TIP para el tema de las rutas.
// Se que puede ser algo enredado lo de GET, POST, PUT, DELETE etc. por eso te dejo el enlace
// TODO: leer https://developer.mozilla.org/es/docs/Web/HTTP/Methods
// Para resumirtelo, puedes usarlo como el mismo crud
// ( GET: Obtener información ó un listado de datos ).
// ( POST: Úsalo cuando se necesite almacenar datos en el servidor ej. almacenar datos de un formulario ).
// ( PUT: Úsalo cuando se necesite actualizar información, también se puede usar POST pero por buenas prácticas te recomiendo este ).
// ( DELETE: Úsalo para eliminar un recurso de la base de datos ).
router.get('/',(req,res)=>{
    //Usamos el método del controlador
   controller.getUsers().then(
       (data) =>{ //Se usa si la respuesta es positiva o si no hay errores en la base de datos
           console.log(data);
           response.success(res,data);
        })
       .catch((error) => { // Se usa si hay errores en la consulta.
           console.error(error);
           response.error(res,error);
       })
});

//Exportamos el módulo para poder usarlo en el archivo routes.js
module.exports = router;
