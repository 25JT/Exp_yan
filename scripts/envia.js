import { db, collection, addDoc  } from "./conexion.js";

export  async function enviar() {
    event.preventDefault();   

    let nombre = document.getElementById('nombre').value;
    let correo = document.getElementById('correo').value;
    let ciudad = document.getElementById('ciudad').value;
    let msg = document.getElementById('msg').value;

    if (nombre ===' ' || correo === ' ' || ciudad === '') {
        alert("Por favor rellene todos los campos")
        return
    }else{
        try {
            const docRef = await addDoc(collection(db, "mensajes"), {
              nombre: nombre,
              correo: correo,
              ciudad: ciudad,
              mensaje: msg
    
            });
            document.getElementById('nombre').value = ' ';
            document.getElementById('correo').value = ' ';
            document.getElementById('ciudad').value = ' ';
            document.getElementById('msg').value = ' ';

            alert("Mensaje enviado con éxito");
     
          } catch (e) {
            console.error("Error adding document: ", e);
            alert("Hubo un error al enviar el mensaje. Por favor, intenta nuevamente.");
          }
    }
    
      
    }

window.enviar = enviar;
