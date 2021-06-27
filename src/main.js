import { router } from "./lib/router.js";
import { signUpSave, signInSave } from "./lib/firebaseAuth.js";
/* import { createPost } from "./lib/firestore.js"; */

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
        /* createPost(); */
        signInSave(emailSignIn, passwordSignIn);
        console.log(emailSignIn, passwordSignIn)
    });
}



































