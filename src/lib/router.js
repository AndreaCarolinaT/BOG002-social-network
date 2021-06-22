import { loginGoogle } from "../lib/firebaseAuth.js"
import { Signup } from "../views/Signup.js"
import { Signin } from "../views/Signin.js"
import { Posts } from "../views/Posts.js"
import { signUpData, signInData } from "../main.js";

const description = document.getElementById("description");

export const router = (route) => {
  const content = document.getElementById('root');
  content.innerHTML = "";
  console.log(route);

  switch (route) {
    case "http://localhost:5000":
      content.appendChild(description);
      break;
    case "http://localhost:5000/#registro":
      description.style.display = "none";
      content.appendChild(Signup());
      loginGoogle();
      signUpData();
      break;
    case "http://localhost:5000/#iniciosesion":
      description.style.display = "none";
      content.appendChild(Signin());
      loginGoogle();
      signInData();
      break;
    case "http://localhost:5000/#posts":
      content.appendChild(Posts());
      break;
  }
}












































