import { router } from "./lib/router.js";
import { signUpSave, signInSave, logOut } from "./lib/firebaseAuth.js";
import { savePost } from "./lib/firestore.js";

window.addEventListener("DOMContentLoaded", () => {
    router(window.location.hash);
})

//activar cambio de hash al cambiar de vistas
window.addEventListener("hashchange", () => {
    console.log(window.location.hash)
    router(window.location.hash);
});

//obtener valores del formulario de registro y guardarlos
export function signUpData() {
    const signUpForm = document.getElementById("signUpForm");
    signUpForm.addEventListener("submit", (e) => {
        const emailSignUp = document.getElementById("emailSignUp").value;
        const passwordSignUp = document.getElementById("passwordSignUp").value;
        e.preventDefault();
        signUpSave(emailSignUp, passwordSignUp)
        console.log(emailSignUp, passwordSignUp)
    });
}

//obtener valores del formulario de inicio de sesión
export function signInData() {
    const signInForm = document.getElementById("signInForm");
    signInForm.addEventListener("submit", (e) => {
        const emailSignIn = document.getElementById("emailSignIn").value;
        const passwordSignIn = document.getElementById("passwordSignIn").value;
        e.preventDefault();
        signInSave(emailSignIn, passwordSignIn);
        console.log(emailSignIn, passwordSignIn)
    });
}

//Obtener valores del formulario de posts
export function createPost() {
    const callPostForm = document.getElementById("postForm");
    callPostForm.addEventListener("submit", async (e) => {
        e.preventDefault();
        const title = callPostForm["postTitle"];
        const description = callPostForm["postDescription"];
        
        await savePost(title.value, description.value);
        callPostForm.reset();
        title.focus();
        console.log(title, description);
    });
}

export function logOutDom() {
 const logOut = document.getElementById("btnLgt");
  logoutB.addEventListener("click", logOut);
  logoutB.appendChild(textLogout);
}


































