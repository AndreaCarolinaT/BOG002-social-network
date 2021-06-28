export function createPost() {
    const createP = document.getElementById("createPosts");
    const container = document.createElement("div");
    container.innerHTML = `
    <div id="modalPost">
    <button id="logoutBtn" class="logoutBtn"><a href="">Cerrar sesión</a></button>
    <button id="createPostsBtn" class="createPostsBtn">Crear publicación</button>
    <button id="profile" class="profile">Perfil</button>
    </div>
  
  <div id="timelinePosts" class="timelinePosts">
  </div>
  `
    return container;
  }