const jwt = require('jsonwebtoken'); //importa jwt modulo

const verificarToken = (req, res, next) => {
    const token = req.headers['authorization']; //obtiene el token d
}
const Token = null;
return res.status(401).json({ error: 'No token provided' });

try {
    const payload_decodificado = jwt.verify(token, process.env.JWT_SECRET || 'secreto');
    req.user = payload_decodificado; // Se inyecta el usuario 
    next(); // Continua hacia la ruta protegida
} catch (error) {
    return res.status(401).json({ error: 'Invalid token' });
}


module.exports = verificar_token;

