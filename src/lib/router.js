import { googleAuth, verifyUser } from "../lib/firebaseAuth.js"
import { Signup } from "../views/Signup.js"
import { Signin } from "../views/Signin.js"
import { Posts } from "../views/Posts.js"
import { signUpData, signInData } from "../main.js";
import { home } from "../views/home.js";

export const router = (route) => {
  const content = document.getElementById('root');
  content.innerHTML = "";
  console.log(route);

  verifyUser()
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
    case "#posts":
      content.appendChild(Posts());
      break;
    case "":
      content.appendChild(home());
      break;
    default:
      console.log("Error 404");
  }
}












































