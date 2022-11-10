
 let camponombre = document.getElementById("nombre");
 let campodonombre = document.getElementById("donombre");
 let campoapellido = document.getElementById("apellido");
 let campodoApellido = document.getElementById("doApellido");
 let campoemail = document.getElementById("email");
 let campotel = document.getElementById("telefono");
 let campoImagen = document.getElementById("imagenprofile");
 let foto=document.getElementById("imageProfile");

function nuevaFoto(){
     let file = new FileReader();

     file.readAsDataURL(campoImagen.files[0]);
     file.onload = () => {
      let LINK = file.result;

      localStorage.setItem("ProfilePic", LINK);

      window.location.reload();
 };
 };



function guardar(){
      let nombre = document.getElementById("nombre").value;
      let donombre = document.getElementById("donombre").value;
      let apellido = document.getElementById("apellido").value;
      let doApellido = document.getElementById("doApellido").value;
      let email = document.getElementById("email").value;
      let tel = document.getElementById("telefono").value;
     localStorage.setItem("profilenombre",nombre);
     localStorage.setItem("profiledonombre", donombre);
     localStorage.setItem("profileapellido", apellido);
     localStorage.setItem("profiledoApellido",doApellido);
     localStorage.setItem("profileemail", email);
     localStorage.setItem("profiletel", tel);
}

(() => {
     'use strict'

     // Fetch all the forms we want to apply custom Bootstrap validation styles to
     const forms = document.querySelectorAll('.needs-validation')

     // Loop over them and prevent submission
     Array.from(forms).forEach(form => {
          form.addEventListener('submit', event => {
               if (!form.checkValidity()) {
                    event.preventDefault()
                    event.stopPropagation()
               }else{
                    guardar();
               }

               form.classList.add('was-validated')
          }, false)
     })
})()

document.addEventListener("DOMContentLoaded", function (e) {
let campoUsuario = document.getElementById("usuario");
let usuario = localStorage.getItem("Usuario");
console.log(usuario);
campoUsuario.innerHTML= usuario;
 let profilenombre =localStorage.getItem("profilenombre");
 let profiledonombre = localStorage.getItem("profiledonombre");
 let profileapellido = localStorage.getItem("profileapellido");
 let profiledoApellido = localStorage.getItem("profiledoApellido");
 let profileemail = localStorage.getItem("profileemail");
 let profiletel =localStorage.getItem("profiletel");
 camponombre.value=profilenombre;
 campodonombre.value=profiledonombre;
 campoapellido.value=profileapellido;
 campodoApellido.value=profiledoApellido;
 campoemail.value=profileemail;
 campotel.value=profiletel;

let profilePic = () => {
      return localStorage.getItem("ProfilePic");
 };
let ShowMyProfilePic = () => {
     if (profilePic()) {
         foto.src = profilePic();
     }
};
ShowMyProfilePic();

 
});