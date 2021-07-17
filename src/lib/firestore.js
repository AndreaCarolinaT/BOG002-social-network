import { deletePostDom, editPostsDom } from "../main.js";

//Función principal para  guardar los posts
export const savePost = (title, description) => {
  db.collection("posts").doc().set({
    title,
    description
  });
};

//Función para obtener los posts y pintarlos
//Se agrega onSnapshot para escuchar cambios realizados
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
      <div class="icons">
      <img src="img/delete.png" class="deleteIcon" id="${postInfo.id}">
      <img src="img/edit.png" class="editIcon" id="${postInfo.id}">
      </div>
      </div>`
    });
    //Se llaman funciones para borrar y editar posts
    deletePostDom();
    editPostsDom();
  })
};

//Función principal para borrar posts
export const deletePosts = (id) => db.collection("posts").doc(id).delete();

//Función principal para editar posts posts
export const editPosts = (id) => db.collection("posts").doc(id).get();

//Función para actualizar los posts editados
export const updateEdit = (id, newContent) => db.collection("posts").doc(id).update(newContent);
