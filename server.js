// importa el modulo express
const express = require('express'); //motor para crear el servidor  
const path = require('path'); //manejo de rutas
const authRoutes = require('./src/routes/authRoutes');

// se arranca el servidor express
const app = express();

app.json((express.json)); //leer los json

//define una ruta GET 
app.get('/', (req, res) => {
    res.send('Servidor funciona'); //envia respuesta de texto

    });

    //define el puerto
const PORT = process.env.PORT || 3000;
//inicia el servidor
app.listen(PORT, () => {
    console.log(`Servidor escucha ${PORT}`);
});
