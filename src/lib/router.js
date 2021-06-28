import { googleAuth } from "../lib/firebaseAuth.js"
import { Signup } from "../views/Signup.js"
import { Signin } from "../views/Signin.js"
import { showTimeline } from "../views/Timeline.js"
import { signUpData, signInData } from "../main.js";
import { home } from "../views/home.js";

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
        break;
      default:
        console.log("Error 404");
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
      default:
        console.log("Error 404");
    }
  }
}












































