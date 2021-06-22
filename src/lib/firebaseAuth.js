export function signUpSave(email, password) {
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((userInfo) => {
      window.location.hash = "http://localhost:5000/#posts";
      alert("¡Registro exitoso! Bienvenido a PetSpace", userInfo.user);
    })
    .catch((error) => {
      alert("Correo o contraseña no válidos, verifica tus datos", error.message);
    });
};

export function signInSave(email, password) {
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((userInfo) => {
      window.location.hash = "http://localhost:5000/#posts";
      alert("¡Bienvenido a PetSpace!", userInfo.user);
    })
    .catch((error) => {
      alert("Verifica tus datos", error.message);
    });
};

export function loginGoogle() {
  const googleBtn = document.getElementById("googleLogin");
  googleBtn.addEventListener("click", () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider)
      .then((result) => {
        window.location.hash = "http://localhost:5000/#posts";
        alert("¡Bienvenido a PetSpace!", result.user);
      })
      .catch((error) => {
        alert("Verifica tu cuenta de gmail", error);
      })
  })
}