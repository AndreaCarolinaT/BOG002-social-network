export function Signup() {
  const container = document.createElement("div");
  container.innerHTML = `
     <div id="signUpForm" class="signUpForm">
    <form>
      <h1>Crear cuenta</h1>
      <label for="name">Nombre o apodo</label>
      <input id="name" type="text" placeholder="Ingresar nombre de usuario" required>

      <label for="email">Correo electrónico</label>
      <input id="emailSignUp" type="email" placeholder="Ingresar correo" required>

      <label for="password">Contraseña</label>
      <input id="passwordSignUp" type="password" placeholder="Crear contraseña" minlength="8" required><br>

      <button id="record" type="submit">Registrarme</button><br>

      <div class="question">
        <a href="http://localhost:5000/#iniciosesion">¿Ya tienes una cuenta? Inicia sesión aquí</a>

        <h3>o</h3>
        <button type="button" class="googleLogin" id="googleLogin"><img
          src="img/GoogleIcon.png"> Ingresa con Google</button>
      </div>
    </form>
  </div>`
  return container;
}

