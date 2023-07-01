function validateLogin() {
    var email = document.getElementById('email').value;
    var senha = document.getElementById('senha').value;
  
    if (email === 'testelogin@gmail.com' && senha === '12345') {
      document.getElementById('login-mensagem').innerHTML = 'Login com sucesso!';
      document.getElementById('login-mensagem').style.display = 'block';
    } else {
      document.getElementById('login-mensagem').innerHTML = 'Esqueceu a senha? <a href="index.html">Clique aqui</a>.';
      document.getElementById('login-mensagem').style.display = 'block';
    }
  }
  