const express = require('express');
const router = express.Router();
const {ruta_protegida} = require('../controllers/authcontroller');
const verificar_token = require('../middleware/authMiddleware');

router.get('/protected', verificar_token, ruta_protegida);



