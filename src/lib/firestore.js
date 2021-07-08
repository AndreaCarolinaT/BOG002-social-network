export const savePost = (title, description) => {
  db.collection("posts").doc().set({
    title,
    description
  });
}


db.collection("posts")
  .get()
  .then((data) => {
    data.forEach((post) => {
     
      const p = document.createElement('p');
      p.innerText = post.data().content;
      posts.append(p);
    });
  })
  .catch((error) => {
    console.log('Error getting documents: ', error);
  });

  //función para mostrar publicaciones
export function getPosts () {
   db.collection("posts").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
        // doc.data() is never undefined for query doc snapshots
        console.log(doc.id, " => ", doc.data());
    });
});
}