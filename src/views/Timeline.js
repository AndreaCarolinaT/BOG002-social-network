import { getPosts } from "../lib/firestore.js";
import { logOutDom } from "../main.js";

export function showTimeline() {
  const container = document.createElement("div");
  container.innerHTML = `
  <button id="btnLgt" class="btnLgt">Cerrar sesión</button>
  <div id="cardNewPost" class="cardNewPost">
  <form id="postForm" class="postForm">
  <input type="text" id="postTitle" placeholder="Escribe un título" class="postTitle" autofocus>
  <textarea id="postDescription" placeholder="Escribe tu publicación" class="postDescription" autofocus></textarea>
  <button type="submit" class="publishBtn" id="publishBtn">Publicar</button>
  </form>
  </div>
<div id="timelinePosts" class="timelinePosts">
</div>`;

getPosts();
//logOutDom();
  return container; 

}



  
