const express = require('express');
const bodyparser = require('body-parser');
require('dotenv').config()
const mongoose = require('mongoose');
const uri = require('./src/config/db');
const { constants } = require('buffer');


const app = express();

// capturar body
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

//importar rutas
const authRoutes = require('./src/routes/authRoutes');
const middleware = require('./src/middleware/authMiddleware');
const dashboard = require('./public/js/dashboard');

// route middlewares
app.use('/api/user', authRoutes,);
app.use('/api/dashboard',middleware,dashboard);
app.get('/', (req, res) => {
    res.json({
        estado: true,
        mensaje: 'funciona!'
    })
});


// iniciar server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`servidor andando en: ${PORT}`)
})