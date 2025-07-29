//importamos jwt
const jwt = require('jsonwebtoken')
 
//Definemos la clave secreta  para vereficar el token
const JWT_SECRET = process.env.JWT_SECRET || 'mysecretkey123';

//funcion que se ejecuta antes de que accedean a las rutas
const verificarToken = (req, res, next) =>{

    //obtiene el valor del header  HTTP
    const headerAutorizacion = req.headers['authorization']

    //inicializamos la varible token
    let token = null;

    //si el haeder existe y empieza con Beafer se divide y se obtiene
    //solo la parte del token 
    if(headerAutorizacion && headerAutorizacion.startsWith('Beafer')){
        token = headerAutorizacion.split(' ')[1];
    };
 
    //Si no se encontro un token se devuelve el 401
    if(!token){
        return res.status(401).json( {message:'Error no se genero token' } )
    };

    //Intenta verificar el token lo decodofica y lo guarda
    //en el contenido del token
    try {
        const payloadDecodificado = jwt.verify(token, JWT_SECRET);

        req.user = payloadDecodificado;

        //si todo esta bien sigue al siguiente Meddleware 
        next();


        //Si hubo un error verificando el token, devuelve un error 401
    } catch(error){
        return res.status(401).json( {message:'token invalido :(('} )
    }
};

 module.exports = verificarToken;