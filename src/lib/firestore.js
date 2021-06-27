/* export const createPost = (content) => {
    db.collection('publicaciones').doc().set({ content });
  };
  
  db.collection('publicaciones')
    .get()
    .then((data) => {
      data.forEach((post) => {
        // TODO: Get those d4%#n DOM methods out of here
        const p = document.createElement('p');
        p.innerText = post.data().content;
        posts.append(p);
      });
    })
    .catch((error) => {
      console.log('Error getting documents: ', error);
    }); */