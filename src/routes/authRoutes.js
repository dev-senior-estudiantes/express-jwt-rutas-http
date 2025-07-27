const express = require("express");
const router = express.Router();
const {
  registrarUsuario,
  iniciarSesion,
  rutaProtegida,
} = require("../controllers/authController"); // Se actualizo el nombre del modulo authController en routes y se importa las funciones en camelCase
const verificarToken = require("../middleware/authMiddleware"); //  se importa la VerificarToken

// Rutas de autenticación, usando verificarToken como middleware para proteger las rutas y rutaProtegida como controlador
router.get("/protected", verificarToken, rutaProtegida); // rutas en camelCase
