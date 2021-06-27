export function home() {
    const container = document.createElement("div");
    container.innerHTML = `
    <div id="navBar">
    <nav>
      <ul>
        <li><a href="http://localhost:5000/#registro">Registro</a></li>
        <li><a href="http://localhost:5000/#iniciosesion">Iniciar Sesión</a></li>
      </ul>
    </nav>
  </div>

  <div id="description">
    <p>Únete a esta gran comunidad dedicada a los amantes de las mascotas.<br>
      <img src="img/pets.jpg">
    </p>
  </div>`
    return container;
  }
  