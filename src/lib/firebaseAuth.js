//Registro de usuario nuevo
export function signUpSave(email, password) {
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((userInfo) => {
      window.location.hash = "#posts";
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
      window.location.hash = "#posts";
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
        window.location.hash = "#posts";
        window.alert("¡Bienvenido a PetSpace!", result.user);
      })
      .catch((error) => {
        window.alert("Verifica tu cuenta de gmail", error);
      })
  })
}

//Observador de estado de autenticación del usuario
export function verifyUser() {
  firebase.auth().onAuthStateChanged(user => {
    if (user) {
      window.location.hash = "#posts";
    } else {
      window.location.hash = "#iniciosesion";
    }
  })
}


