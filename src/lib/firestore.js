import { deletePostDom } from "../main.js";

//Función principal para  guardar los posts
export const savePost = (title, description) => {
  db.collection("posts").doc().set({
    title,
    description
  });
}

//Función para obtener los posts y pintarlos
export function getPosts() {
  db.collection("posts").onSnapshot((doc) => {
    const postCard = document.getElementById("timelinePosts");
    postCard.innerHTML = ""
    doc.forEach(post => {
      const postInfo = post.data()
      postInfo.id = post.id;
      postCard.innerHTML += `<div class="contentPosts">
      <h3>${postInfo.title}</h3>
      <p>${postInfo.description}</p>
      <div id="${postInfo.id}"><img src="img/delete.png" class="deleteIcon" id="${postInfo.id}"></div>
      <div><img src="img/edit.png" class="editIcon"></div>
      </div>`
    });
    //Se implementa función para borrar posts
    deletePostDom();
  })
}

//Función principal para borrar posts
export const deletePosts = id => db.collection("posts").doc(id).delete();







