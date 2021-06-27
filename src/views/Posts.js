export function Posts() {
  const container = document.createElement("div");
  container.innerHTML = `
  <div id="timeline" class="timeline">
  <div id="boxPosts" class="boxPosts">
    <button id="publishBtn" class="publishBtn">hola</button>
  </div>
  </div>    
    `
  return container;
}
