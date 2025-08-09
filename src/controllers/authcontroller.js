const jwt = require("jsonwebtoken"); //importa jwt module
const bcrypt = require("bcrypt"); //importa bcrypt module
const users = require("../config/db"); //importa el users

// Funcion para registara un nuevo usuario
//  Nombre de Funciones y variables camelCase, la primer letra de la segunda palabra en Mayuscula.
const registrarUsuario = async (req, res) => {
  const { username, password } = req.body; // Cambiar variables en ingles.

  // Validacion de datos, usar las variables en ingles
  if (!username || !password) {
    return res
      .status(400)
      .json({ error: "Username and password are required" });
  }

  //verifica si existe el usuario
  // Si el usuario existe, retorna un error
  // variables de username
  const usuarioexiste = users.find((u) => u.username === username);
  if (usuarioexiste) {
    return res.status(400).json({ error: "Username already exists" });
  }

  // Hashear la contraseña
  // bcrypt.hash es una funcion asincrona, por lo que debemos usar await
  // y la variable debe ser declarada como const
  const passwordHasheada = await bcrypt.hash(password, 10);
  users.push({ username, password: passwordHasheada }); //agrega el usuario al array
  return res.status(201).json({ message: "User registered successfully" });
  //   return res.status(4001).json({ error: "Error al registrar" }); // El Error 4001 no existe, recuerda los metodos http
};

// Login usuario <camelCase>, nombre variables en ingles
// Esta funcion inicia sesion y retorna un token
const iniciarSesion = async (req, res) => {
  const { username, password } = req.body; //obtiene los datos del body

  // Busca usuario, Si no existe el usuario, retorna un error
  const usuarioEncontrado = users.find((u) => u.username === username);
  if (!usuarioEncontrado) {
    return res.status(400).json({ error: "Invalid credentials" });
  }

  // Verifica contraseña
  // bcrypt.compare es una funcion asincrona, por lo que debemos usar await
  // y la variable debe ser declarada como const
  const passwordValida = await bcrypt.compare(
    password,
    usuarioEncontrado.password
  );
  if (!passwordValida) {
    return res.status(400).json({ error: "Invalid credentials" });
  }

  // Usaste pyload y es payload, pero debemos usar el token
  const token = jwt.sign(
    { username: usuarioEncontrado.username }, //payload del token
    JWT_SECRET,
    { expiresIn: "1h" }
  );
  return res.status(200).json({ token, message: "Login successful" }); //retorna el token
};
//
const rutaProtegida = (req, res) => {
  return res
    .status(200)
    .json({ message: "This is a protected route", user: req.user });
};
// Se actualizo para exportar las funciones
// y no el objeto completo
module.exports = {
  registrarUsuario,
  iniciarSesion,
  rutaProtegida,
};
//comentario de prueba de git