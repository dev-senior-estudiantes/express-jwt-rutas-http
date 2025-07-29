//Se realiza la importacion de las dependecias
const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
const authRoutes = require('authRoutes');
const { send } = require('process');


//configuracion inicial 
dotenv.config();
const app = express();

//uso de Meddleware
app.use(express.json()) //parsea el cuerpo del JSON y lo pasa a obj
app.use(express.static(path.join(__dirname, 'public'))); // archivos estaticos publicos

//esta es la ruta de autenticacion
app.use('/api/auth', authRoutes)

//esta es la ruta principal 
app.get('/', (res, req) =>{
    res.sendFile(path.join(__dirname, 'public', 'index.html'))
});


// puerto del servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () =>{
    console.log(`servidor escuchando en http://localhost:${PORT}`)
});