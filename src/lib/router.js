import { getCurrentUser, googleAuth } from "../lib/firebaseAuth.js"
import { Signup } from "../views/Signup.js"
import { Signin } from "../views/Signin.js"
import { showTimeline } from "../views/Timeline.js"
import { signUpData, signInData, createPost, logOutDom } from "../main.js";
import { home } from "../views/home.js";

//Estructura del router
export const router = (route) => {
  //Observador de autenticación
  const user = getCurrentUser();
  console.log(user)
  //Se carga contenido en root dependiendo del hash
  const content = document.getElementById('root');
  content.innerHTML = "";

  //Si hay un usuario logueado se muestra el timeline
  if (user) {
    switch (route) {
      case "#timeline":
        content.appendChild(showTimeline());
        logOutDom();
        createPost();
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
      default:
        content.appendChild(home())
    }
  }
}