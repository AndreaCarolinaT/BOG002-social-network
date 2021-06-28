import { logOut } from "../lib/firebaseAuth.js"

export function showTimeline() {
  const container = document.createElement("div");
  const logoutB = document.createElement("button");
  const textLogout = document.createTextNode("cerrar sesión");
  logoutB.addEventListener("click", logOut);
  logoutB.appendChild(textLogout);
  container.innerHTML = `
  <div id="btnsTimeline">
  <button id="createPostsBtn" class="createPostsBtn">Crear publicación</button>
  <button id="profile" class="profile">Perfil</button>
  </div>

  <div id="modalPosts"
<div id="timelinePosts" class="timelinePosts">
</div>
`
container.appendChild(logoutB)
  return container;
}
