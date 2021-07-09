import { googleAuth } from "../lib/firebaseAuth.js"
import { Signup } from "../views/Signup.js"
import { Signin } from "../views/Signin.js"
import { showTimeline } from "../views/Timeline.js"
import { signUpData, signInData, createPost, logOutDom } from "../main.js";
import { home } from "../views/home.js";

//Estructura del router
export const router = (route) => {
  const user = firebase.auth().currentUser;
  const content = document.getElementById('root');
  content.innerHTML = "";

  //Si hay un usuario logueado se muestra el timeline
  if (user) {
    console.log(route)
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
        content.appendChild(Signin())
    }
  }
}
















/*   if (user) {
    switch (route) {
      case "#timeline":
        content.appendChild(showTimeline());
        createPost();
        logOut();
        break;
      default:
        window.location.assign("#timeline");
    }
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
} */

/* firebase.auth().onAuthStateChanged(function (user) {
  if (user) {
    window.location.assign("#timeline");
  }
})
 */










































/* //Estructura del routing
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
} */



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




































