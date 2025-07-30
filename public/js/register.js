//con el selector de etiquetas accedemos al id del form
//sera asincrona para que trabeje paralelamente
document
  .getElementById("registerForm")
  .addEventListener("submit", async (e) => {
    //evita que la pagina se recargue
    e.preventDefault();

    //aqui obtenemos los datos del input y usamos el trim()
    //para elimiar los espacios al inicio y fin
    const usu = document.getElementById("user").value.trim();
    const pass = document.getElementById("user").value.trim();

    //usamos el try para capturar errores que pasen el feth
    try {
      //hacemos una peticion HTTP POST a la ruta /register
      //usamos el await para esperar la respuesta que viene
      //del servidor
      const res = await fetch("/register", {
        //aqui le indico el metodo en este caso sera el POST
        method: "POST",
        //indica el cuerpo de la peticion en formato JSON
        headers: { "Content-Type": "application/json" },
        //convertimos en cadena JSON el obj { usu, pass } la
        //que enviare al servidor
        body: JSON.stringify({ usu, pass }),
      });

      //usamos el await donde el tiene que espar la respuesta
      //del servidor
      const data = await res.json();
    } catch (err) {
      console.log("error ");
    }
  });
