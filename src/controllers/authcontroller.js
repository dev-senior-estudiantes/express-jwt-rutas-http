const jwt = require('jsonwebtoken'); //importa jwt module
const bcrypt = require('bcrypt'); //importa bcrypt module
const users = require('../config/db'); //importa el users

//fucnion para registara un nuevo usuario 
const registrar_usuario = async (req, res) => {
    const {usuario, contraseña } = req.body; 
    const passwordHasheada = await bcrypt.hash(password, 10);  //Hashear la contraseña
    users.push({ usuario, contraseña: passwordHasheada }); //agrega el usuario al array
    return res.status(201).json({ message: 'Usuario registrado' });
    return res.status(4001).json({ error: 'Error al registrar' });
}

//validacion de datos
if (!usuario || !contraseña) {
    return res.status(400).json({ error: 'Usuario y contraseña obligatorio' });
}

//verifica si existe
const usuarioexiste = users.find(u => u.usuario === usuario);
if (usuarioexiste) {
    return res.status(400).json({ error: 'Usuario ya existe' });
}

//login usuario
const iniciar_sesion = async (req, res) => {
    const { usuario, contraseña } = req.body; //obtiene los datos del body

//busca usuario 
const usuarioEncontrado = users.find(u => u.usuario === usuario);
if (!usuarioEncontrado) {
    return res.status(400).json({ error: 'Usuario no encontrado' });
}

//verifica contraseña
const contraseñaValida = await bcrypt.compare(contraseña, usuarioEncontrado.contraseña);
if (!contraseñaValida) {
    return res.status(400).json({ error: 'Contraseña incorrecta' });
}

const pyload = { usuario: usuarioEncontrado.usuario }; //payload del token
const token
    = jwt.sign(pyload, 'mi_clave_secreta', { expiresIn: '1h' }); //firma el token
return res.status(200).json({ token }); //retorna el token
}

const rutaProtegida = (req, res) => {
    return res.status(200).json({ message: 'Ruta protegida accedida' });
}   
//exporta las funciones
module.exports = {
    registrar_usuario,
    iniciar_sesion
};


