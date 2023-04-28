/**
 * @desc: ARCHIVO PARA GENERALIZAR LAS RESPUESTAS DEL SERVIDOR
 */

//respuesta exitosa
exports.success = function(res,message,status){
    res.status(status || 200).send(
        {
            error:"",
            message:message
        }
    );
}

//respuesta con errores
exports.error = function(res,message,status){
    res.status(status || 500).send(
        {
            error:message,
            message:""
        }
    );
}
