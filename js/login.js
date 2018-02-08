$(document).ready(function () {
  // comprobando inicio de sesión
  $('#btn-login').click(function () {
    let mailVal = $('#email').val();
    let passVal = $('#password').val();
    
    if (mailVal !== '' && passVal.length >= 6 && passVal !== '123456') {
      window.location.href = 'view/main.html';
    } else {
      alert('No se pudo iniciar sesión.');
    }
  });
});