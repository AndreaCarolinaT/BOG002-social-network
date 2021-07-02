import { logOut } from "../lib/firebaseAuth.js"
/* import { savePost } from "../lib/firestore.js";
import { createPost } from "../main.js"; */


export function showTimeline() {
  const container = document.createElement("div");
  const logoutB = document.createElement("button");
  logoutB.setAttribute("id", "btnLgt");
  const textLogout = document.createTextNode("cerrar sesión");
  /* logoutB.addEventListener("click", logOut); */
  logoutB.appendChild(textLogout); 
  container.innerHTML = `
  <div id="cardNewPost" class="cardNewPost">
  <form id="postForm" class="postForm">
  <input type="text" id="postTitle" placeholder="Escribe un título" class="postTitle" autofocus>
  <textarea id="postDescription" placeholder="Escribe tu publicación" class="postDescription" autofocus></textarea>
  <button type="submit" class="publishBtn" id="publishBtn">Publicar</button>
  </form>
  </div>
<div id="timelinePosts" class="timelinePosts">
</div>`;

/* container.appendChild(logOut()); */
/*savePost(); 
createPost();  */
container.appendChild(logoutB);
  return container;
  
}



  
