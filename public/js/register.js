//accedemos al id del formulario
    const form = document.getElementById('registerForm').addEventListener('submit', async (e)=>{
    //prevenimos el recargue del la pagina cuando se envian los datos
    e.preventDefault();

    //accdemos al id del usuario
    const usu = document.getElementById('username'.value.trim());

     //accdemos al pass del usuario
    const pass = document.getElementById('password'.value.trim());

    //accdemos al parrafo donde se mostraran los mensajes de estado
    const stateMessage = document.getElementById('statusMessage').value.trim();

    //validamos si los campos estan vacios
    if(!usu || !pass){
        //aqui le digo que muestre un aviso
        stateMessage.textContent = "Llenar todos loc campos";
        //ese aviso viene de color rojo
        stateMessage.style.color = "red";
        //saco la funcion para que no siga
        return;
    }


    try{
        //Se hace una solicitud POST al servidor usando fetch
        const response = await fetch('/register', {
            method: "POST",
            headers: {
                //aqui le digo que los datos que se estan enviado
                // a la applicacion estan formato JSON
                "Content-Type": "application/json()",
            },

            //tomo el obj y los pasamos a JSON para que lo entienda el servidor
            body: JSON.stringify({ usu, pass})
        });


        //convierto la respuesta a un obj legible
        const resul = await response.json();

        //validamos si la respuesta fue exitosa
        if(response.ok){
            //muestra un mensaje de bienvenido
            stateMessage.textContentn = "Bienvenido :))";
            //con este color verde indicamos que todo esta bien
            stateMessage.style.color = "green";
            //limpio los campos del formulario
            form.reset();
        }else{
            //muestra un mensaje si todo salio mal
            stateMessage.textContentn = "Error validar credenciales :((";
            //si hay error le ponemos color rojo
            stateMessage.style.color = "red";
        }
    }catch(error){
        //si hay un error se muestra un mensaje
        stateMessage.textContent = "Ocurrio un problema intenta mas tarde";
        stateMessage.style.color = "red";
        stateMessage.error("Error al intentar registarse", error)
    }
});