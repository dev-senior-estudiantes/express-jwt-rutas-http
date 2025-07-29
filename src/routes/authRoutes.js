const express = require('express');
//Crwamos una instancia del router 
const router = express.Router();

//importamos las funciones del controlador
const {
    registrarUsuario,
        inicioSesion,
        rutaProtegida,
} = require('../controllers/authControllers');

//importamos el meddleware que verifica el token
const verificarToken = require('../middleware/authMiddleware');

//rutas que son publicas
router.post('/register', registrarUsuario );
router.post('/login', inicioSesion);

// rutas que son privadas
router.get('/protected', verificarToken, rutaProtegida);

module.exports = router;