const express = require('express'); //Librería para la creación del servidor.
const bodyParser = require('body-parser'); //Librería que maneja las peticiones que se realicen al servidor
const router = require('./network/routes'); //Se importan las rutas que se utilizarán en el servidor.

const app = express();// Instanciamos la clase express para hacer uso de sus funcionalidades
const PORT = 3000; //Creamos la constante del puerto

app.use(bodyParser.json()); //Establecemos un middleware (función intermedia) para que todas la peticiones que lleguen al servidor, sean tratadas como un json
app.use(bodyParser.urlencoded({extended:false})); //Middleware para utilizar las peticiones que se realicen mediante query params
router(app); //hacemos uso de todas las rutas, pasando la instancia ya creada del servidor

//Inicializamos el servidor
app.listen(PORT,()=>console.log(`conectado al puerto ${PORT}`));
