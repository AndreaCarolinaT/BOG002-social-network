import { likesDom } from "../main.js";

export const renderPosts = (postInfo, post) => {
    const postCard = document.getElementById("timelinePosts");
    postInfo.id = post.id;
    postInfo.user = auth.currentUser.uid;
    postCard.innerHTML += `
    <div class="contentPosts">
      <h3>${postInfo.title}</h3>
       <p>${postInfo.description}</p>
     <div class="icons">
      <img src="img/delete.png" class="deleteIcon" id="${postInfo.id}">
      <img src="img/edit.png" class="editIcon" id="${postInfo.id}">
     </div>
    <div id="containerLikes">
      <img src="img/heartblack.png" data-id="${postInfo.id}" class="btnLike">
      <span class="likesCounter" id="likePost${postInfo.id}">${postInfo.likes?.length ?? 0}</span>
     </div>
    </div>`
    //${postInfo.likes?.length ?? 0} si es undefined muestra 0 por defecto
    likesDom(postInfo);
}