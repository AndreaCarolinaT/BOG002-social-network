//Registro de usuario nuevo
export function signUpSave(email, password) {
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((userInfo) => {
      window.location.hash = "#timeline";
      window.alert("¡Registro exitoso! Bienvenido a PetSpace", userInfo.user);
    })
    .catch((error) => {
      window.alert("Correo o contraseña no válidos, verifica tus datos", error.message);
    });
};

//Inicio de sesión
export function signInSave(email, password) {
  firebase
    .auth()
    .signInWithEmailAndPassword(email, password)
    .then((userInfo) => {
      window.location.hash = "#timeline";
      window.alert("¡Bienvenido a PetSpace!", userInfo.user);
    })
    .catch((error) => {
      window.alert("Verifica tus datos", error.message);
    });
};

//Autenticación con Gmail
export function googleAuth() {
  const googleBtn = document.getElementById("googleLogin");
  googleBtn.addEventListener("click", () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider)
      .then((result) => {
        window.location.hash = "#timeline";
        window.alert("¡Bienvenido a PetSpace!", result.user);
      })
      .catch((error) => {
        window.alert("Verifica tu cuenta de gmail", error);
      })
  })
}

//Cerrar sesión
export function logOut() {
  firebase.auth().signOut()
    .then(() => {
      window.location.hash = "";
    }).catch((error) => {
      alert("Ocurrió un error, intentelo de nuevo", error);
    });
}