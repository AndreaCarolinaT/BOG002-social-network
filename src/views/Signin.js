export function Signin() {
    const container = document.createElement("div");
    container.innerHTML = `
       <div id="signInForm" class="signInForm">
      <form>
        <h1>Iniciar Sesión</h1>
  
        <label for="email">Correo electrónico</label>
        <input id="emailSignIn" type="email" placeholder="Ingresar correo" required>
  
        <label for="password">Contraseña</label>
        <input id="passwordSignIn" type="password" placeholder="Crear contraseña" minlength="8" required><br>
  
        <a href="http://localhost:5000/#posts"><button id="signInBtn" type="submit"></a>Ingresar</button><br>
  
        <div class="question">  
        <a href="http://localhost:5000/#registro">¿Aún no tienes una cuenta? Regístrate aquí</a>
          <h3>o</h3>
          <button type="button" class="googleLogin" id="googleLogin"><img
            src="img/GoogleIcon.png"> Ingresa con Google</button>
        </div>
      </form>
    </div>`
    return container;
  }
  