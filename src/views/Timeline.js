import { getPosts } from "../lib/firestore.js";

//Funcion para mostrar timeline
export function showTimeline() {
  const container = document.createElement("div");
  container.innerHTML = `
  <button id="btnLgt" class="btnLgt">Cerrar sesión</button>
  <form id="postForm" class="postForm">
  <input type="text" id="postTitle" placeholder="Escribe un título" class="postTitle" required autofocus>
  <textarea id="postDescription" placeholder="Escribe tu publicación" class="postDescription" required autofocus></textarea>
  <button type="submit" class="publishBtn" id="publishBtn">Publicar</button>
  </form>
  
<div id="timelinePosts" class="timelinePosts">
</div>`;
//Se obtienen los posts
  getPosts()
  return container;
}




