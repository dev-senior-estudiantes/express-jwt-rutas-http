const jwt = require("jsonwebtoken"); //importa jwt modulo

// Middleware para verificar el token JWT, usamos camelCase para el nombre de la funcion
// y las variables en ingles.
const verificarToken = (req, res, next) => {
  const authHeader = req.headers["authorization"]; //

  let token = null;
  if (authHeader && authHeader.startsWith("Bearer ")) {
    token = authHeader.split(" ")[1];
  }
  if (!token) {
    return res.status(401).json({ message: "No token provided" });
  }

  // Usamos process.env.JWT_SECRET para verificar el token y directamente porque solo se usa una vez
  // y no es necesario crear una variable constante.
  try {
    const decodePayLoad = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decodePayLoad; // Se inyecta el usuario
    next(); // Continua hacia la ruta protegida
  } catch (error) {
    return res.status(401).json({ error: "Invalid token" });
  }
};

module.exports = verificarToken;
