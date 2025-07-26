const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt'); 
const usuarios_db = require('../config/db'); //importamos la base de datos estructurada


const registrarUsuario = (req, res) =>{

    //Extraemos el usuername y password de req.body
    const { username, password } = req.body;

    if(username === " " && password === " ") return res.status(400).json({ message: "Usuario y contraseñas requeridas" })
}