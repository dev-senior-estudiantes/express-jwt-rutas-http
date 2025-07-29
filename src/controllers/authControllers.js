const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt'); 
const usuarios_db = require('../config/db'); //importamos la base de datos estructurada

const JWT_SECRET = process.env.JWT_SECRET  || 'mysecretkey123';

//funcion registra usuarios usamos await por que recibe un req y res cuando alguien se registra
const registrarUsuario = async (req, res) =>{

    //Extraemos el usuername y password que viene del json de req.body
    const { username, password } = req.body;

    //verifica si alguno de los campos esta vacio si esta respode
    //con un error 400 
    if(!username ||  password) return res.status(400).json({ message: "Usuario y contraseñas requeridas" });

    //busco si ya hay un usuario con ese nombre si lo hay 
    //regresa al primero
    const usuario_existe = usuarios_db.find(usu =>usu.username === username);

    //si el nombre del usuario ya existe devuelve un un error 400 
    if(usuario_existe){
        return res.status(400).json( {message: 'Este nombre de usuario ya existe :('} )
    };

    //incriptmaos la contraseña con el mayor grado que es 10
    const passwordIncriptada = await bcrypt.hash(password, 10);

    //Aqui guardamos el nuevo usu incriptado
    usuarios_db.push( {username, passwordIncriptada} );

    //Aqui le decimos que el usuario fue creado con exito 
    return res.status(201).json( {message: 'Usu creado exitosamente :)'} );
};

    //funcion iniciar sesion
    const inicioSesion = async (req, res) =>{ 
        //extraemos de nuevo los datos enviados por el usu
        const { username, password } = req.body;

        //buscamos el usuario ne la base de datos
        const usuario = usuarios_db.find(user => user.username === username);

        //Si el usu no exite da error credenciales invalidas
        if(!usuario) {
            return res.status(400).json( {message: 'Credenciale invalidas'} )
        }
    
        // Comparo la contraseña ingresada con la que se guarda en el hash
        const passwordValida = await bcrypt.compare(password, usuario.password);

        if(!passwordValida){
            return res.status(400).json( {message: 'accesos invalidos :((('} ) 
        }

        //Si la contraseña es incorrecta, genera un error en el token
        const token = jwt.sign( { username}, JWT_SECRET, { expiresIn: '1h'
             
        } );

        //devuelvo el token al usuario con el acceso correcto
        return res.status(200).json( {token, message: 'Accesos correcto :))'} )

    };


    ///funcion ruta protegida

    //Esta funcion se ejecuta solo si el usu esta autenticado correctament 
    //Esto lo validamos con el uso del Meddleware.
    const rutaProtegida = (req, res) =>{
        return res.status(200).json( {
            message: 'Esto es una ruta protegida',
            user: req.user
        } )

    };

    //exportamos las funciones que solo se van a usar
    module.exports = {
        registrarUsuario,
        inicioSesion,
        rutaProtegida,
    };

