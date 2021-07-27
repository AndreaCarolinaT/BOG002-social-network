import { deletePostDom, editPostsDom } from "../main.js";
import { renderPosts } from "../views/Posts.js";
import { getCurrentUser } from "./firebaseAuth.js";

//Función principal para  guardar los posts
export const savePost = (title, description) => {
  db.collection("posts").doc().set({
    title,
    description,
    likes: [],
    userid: getCurrentUser().uid
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
      renderPosts(postInfo, post)
    })//Se llaman funciones para borrar y editar posts
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

//Función que actualiza la cantidad de likes
export const updateLikes = (id, likes) => db.collection("posts").doc(id).update({
  likes
});