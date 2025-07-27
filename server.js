require("dotenv").config(); // Geral tenemos que Carga las variables de entorno desde .env importando la biblioteca de DOTENV PARA LAS VARIABLES DE ENTORNO.
// importa el modulo express
const express = require("express"); //motor para crear el servidor
const path = require("path"); //manejo de rutas
const authRoutes = require("./src/routes/authRoutes");

//define el puerto
const PORT = process.env.PORT || 3000;

// se arranca el servidor express
const app = express();

// Configuración del middleware para manejar JSON
app.use(express.json()); // se modifico Con los paréntesis ejecutas la función y obtienes el middleware listo para usar.

// Middleware para servir archivos estáticos desde la carpeta "public"

// Rutas de autenticación bajo "/api/auth"

//define una ruta GET
// debes agregar para que sirva el archivo "public/index.html"
app.get("/", (req, res) => {
  res.send("Servidor funciona"); //envia respuesta de texto
});

//inicia el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`); // recuerda usar comillas invertidas
  //
});

<<<<<<< HEAD
=======
// Nota revisar los middleware para recibir los archivos estaticos
>>>>>>> 26c4259c886388de304257265c99a78a3e7619a0
