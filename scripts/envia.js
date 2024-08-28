import { db, collection, addDoc  } from "./conexion.js";

export  async function enviar() {
    event.preventDefault();   

    let nombre = document.getElementById('nombre').value;
    let correo = document.getElementById('correo').value;
    let telefono = document.getElementById('telefono').value;
    let msg = document.getElementById('msg').value;

    if (nombre ===' ' || correo === ' ' || telefono === '') {
        
        swal("😬","Por favor rellene todos los campos","error");
        return
    }else{
        try {
            const docRef = await addDoc(collection(db, "mensajes"), {
              nombre: nombre,
              correo: correo,
              telefono: telefono,
              mensaje: msg
    
            });
            document.getElementById('nombre').value = ' ';
            document.getElementById('correo').value = ' ';
            document.getElementById('telefono').value = ' ';
            document.getElementById('msg').value = ' ';

            swal("📨","Mensaje enviado con éxito","success");
     
          } catch (e) {
            console.error("Error adding document: ", e);
            swal("😓","Hubo un error al enviar el mensaje. Por favor, intenta nuevamente.","error");
          }
    }
    
      
    }

window.enviar = enviar;
