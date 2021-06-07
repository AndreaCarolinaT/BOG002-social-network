export const signUp = (email, password) => {
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((userInfo) => {
      return userInfo.user;
    })
    /* console.log(userInfo) */

    .catch((error) => {
      return error.message
    });
};
