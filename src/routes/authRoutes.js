const router = require('express').Router();
const { error } = require('console');
const User = require('../models/User');
const joi = require('@hapi/joi');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


//validaciones joi
const schemaRegister = joi.object({
    name: joi.string().min(4).max(255).required(),
    email: joi.string().min(6).max(255).required().email(),
    password: joi.string().min(6).max(1024).required()
});

//esquema del login
const schemaLogin = joi.object({
    email: joi.string().min(6).max(255).required().email(),
    password: joi.string().min(6).max(1024).required()
})
// login
router.post('/login', async (req, res) => {

   //validaciones
    const { error } = schemaLogin.validate(req.body);
    if (error) return res.status(400).json({ error: error.details[0].message })
    
    //se busca el usuario si existe en la bases de datos 
    const user = await User.findOne({email: req.body.email});
    if (!user) return res.status(400).json({ error: true , mensaje: 'email no registrado' });

    //validar password  
    const passValida = await bcrypt.compare(req.body.password, user.password);
    if (!passValida) return res.status(400).json({ error: true, mensaje: 'contraseña no válida' });

    //creacion del token
    const token = jwt.sign({
        name: user.name,
        id: user._id
    }, process.env.TOKEN_SECRET);

    res.header('auth-token', token).json({
        error: null,
        data: {token}
    })
});
// ruta de registro
router.post('/register', async (req, res)=>{

//validaciones de usuario
const {error} = schemaRegister.validate(req.body);

if(error){
    return res.status(400).json({error: error.details[0].message});
}
//validar email existente
const emailUnico = await User.findOne({email: req.body.email});
if(emailUnico) return res.status(400).json({error: true, mensaje: 'email ya registrado'});

//hash contraseña
const saltos = await bcrypt.genSalt(10);
    const password = await bcrypt.hash(req.body.password, saltos); 

// registro de usuario
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        password: password
});
    try {
        const userdb = await user.save();
        res.json({
        error: null,
        data: userdb
    });

    } catch (error) {
        res.status(400).json(error);
    }
});

module.exports = router;