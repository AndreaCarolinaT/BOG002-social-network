import { router } from "./lib/router.js";
import { signUpSave, signInSave, logOut } from "./lib/firebaseAuth.js";
import { getPosts, savePost } from "./lib/firestore.js";

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
        const title = document.getElementById("postTitle");
        const description = document.getElementById("postDescription");
        await savePost(title.value, description.value);
        getPosts();
        callPostForm.reset();
        title.focus();
    });
}

//Listener de boton cerrar sesión
export function logOutDom() {
    const logOut_ = document.getElementById("btnLgt");
    logOut_.addEventListener("click", async () => {
        await logOut();
    });
}




































