export const savePost = (title, description) => {
  db.collection("posts").doc().set({
    title,
    description
  });
}

export function getPosts() {
  db.collection("posts").get()
    .then((data) => {
      data.forEach((doc) => {
        console.log(doc.data())
        const postCard = document.getElementById("timelinePosts");
        const info = doc.data();
        postCard.innerHTML += `<div class="contentPosts">
      <h3>${info.title}</h3>
      <p>${info.description}</p>
      </div>`
      });
    })
    .catch((error) => {
      console.log('Error getting documents: ', error);
    });
}
