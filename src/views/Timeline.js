import { getPosts } from "../lib/firestore.js";

//Funcion para mostrar timeline
export function showTimeline() {
  const container = document.createElement("div");
  container.innerHTML = `
  <button id="btnLgt">Cerrar sesión</button>
  <form id="postForm" class="postForm">
   <input type="text" id="postTitle" placeholder="Título de tu publicación" class="postTitle" required autofocus>
   <textarea id="postDescription" placeholder="Escribe tu publicación" class="postDescription" required autofocus></textarea>
   <button type="submit" class="publishBtn" id="publishBtn">Publicar</button>
  </form>

  <div class="overlay" id="overlay">
  </div>

  <div class="editModal" id="editModal">
   <form id="editForm" class="editForm">
    <input type="text" id="editTitle">
    <textarea id="editDescription"></textarea>
    <button type="submit" class="editBtn" id="editBtn">Editar</button>
    <button class="cancelBtn" id="cancelBtn">Cancelar</button>
   </form>
  </div>

  <div id="timelinePosts" class="timelinePosts">
  </div>`;
  //Se obtienen los posts
  getPosts();
  return container;
}
