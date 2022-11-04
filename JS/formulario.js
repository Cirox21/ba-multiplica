function limpiarErrores(){
    var errores = document.getElementsByClassName("error");
    for(var i = 0; i < errores.length; i++){
      errores[i].innerHTML = "";
    }
  }
  
  function validar(formulario) {
  
    limpiarErrores();
  
    var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!re.test(formulario.email.value)) {
      document.getElementById("errorEmail").innerText = "Email inválido";
      formulario.email.focus();
      return false;
    }
  
    if (formulario.password.value.trim().length == 0) {
      document.getElementById("errorPassword").innerText = "Campo obligatorio";
      formulario.password.focus();
      return false;
    }
  
    if (formulario.password.value.trim().length < 8) {
      document.getElementById("errorPassword").innerText = "Contraseña inválida,(Mínimo 8 caracteres)";
      formulario.password.focus();
      return false;
    }
  
    if (formulario.password.value != formulario.password2.value) {
      document.getElementById("errorPassword2").innerText = "Confirmación no coincide con la Contraseña";
      formulario.password2.focus();
      return false;
    }
  
  if (formulario.musica.value == "") {
      document.getElementById("errorMusica").innerText = "Debe seleccionar un disco favorito";
      formulario.musica.focus();
      return false;
    }
  
  
    if (formulario.edad.value == "") {
      document.getElementById("errorEdad").innerText = "Debe seleccionar un rango de edad";
      return false;
    }
  
    
    if (!formulario.terminos.checked) {
      document.getElementById("errorTerminos").innerText = "Debe aceptar los términos y condiciones";
      formulario.terminos.focus();
      return false;
    }
  
    alert("Registro exitoso");
  
    return true;
  }