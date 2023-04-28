/**
 * @desc: CLASE PARA LA CONEXIÓN A LA BASE DE DATOS
 * @author:
 */
class Mysql{

    connection(){
        let db = require('mysql2/promise');
        let connection = db.createConnection({
            host:"localhost",
            user:"pruebas",
            password:"pru3b4s",
            database:"test"
        });
        return connection;
    }
}

module.exports = Mysql;
