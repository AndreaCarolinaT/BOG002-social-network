import { googleAuth, logOut } from "../lib/firebaseAuth.js"
import { Signup } from "../views/Signup.js"
import { Signin } from "../views/Signin.js"
import { showTimeline } from "../views/Timeline.js"
import { signUpData, signInData, createPost } from "../main.js";
import { home } from "../views/home.js";
/* import { savePost } from "./firestore.js"; */

//Estructura del routing
export const router = (route) => {
  const content = document.getElementById('root');
  content.innerHTML = "";
  const user = firebase.auth().currentUser;

  //Si hay un usuario logueado se muestra el timeline
  if (user) {
    switch (route) {
      case "#timeline":
        content.appendChild(showTimeline());
        createPost();
        logOut();
        break;
      default:
        console.log("Error 404", user);
    }
    //Si no, se muestran las vistas principales
  } else {
    switch (route) {
      case "#registro":
        content.appendChild(Signup());
        googleAuth();
        signUpData();
        break;
      case "#iniciosesion":
        content.appendChild(Signin());
        googleAuth();
        signInData();
        break;
      case "":
        content.appendChild(home());
        break;
      case "#timeline":
        content.appendChild(home());
        break;
      default:
        content.appendChild(Signin())
    }
  }
}









  /* firebase.auth().onAuthStateChanged(user => {
    if (user) {
      switch (route) {
        case "#timeline":
          content.appendChild(showTimeline());
          createPost();
          break;
        default:
          console.log("Error 404", user);
      }
    } else {
      switch (route) {
        case "#registro":
          content.appendChild(Signup());
          googleAuth();
          signUpData();
          break;
    }
  }) */




































