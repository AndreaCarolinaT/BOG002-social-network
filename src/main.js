import { router } from "./lib/router.js";
import { signUpSave, signInSave, logOut, getCurrentUser } from "./lib/firebaseAuth.js";
import { deletePosts, editPosts, getPosts, savePost, updateEdit, updateLikes } from "./lib/firestore.js";

//Cargar contenido y cambio de hash
window.addEventListener("DOMContentLoaded", () => {
    router(window.location.hash);
});

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
};

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
};

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
};

//Listener de boton cerrar sesión
export function logOutDom() {
    const logOut_ = document.getElementById("btnLgt");
    logOut_.addEventListener("click", async () => {
        await logOut();
    });
};

//Listener para ìconos de borrar posts
export function deletePostDom() {
    const deleteI = document.querySelectorAll(".deleteIcon");
    deleteI.forEach(icon => {
        icon.addEventListener("click", async () => {
            await deletePosts(icon.id);
        });
    });
};

//Función para editar posts
export function editPostsDom() {
    const editI = document.querySelectorAll(".editIcon");
    const editModal = document.querySelector("#editModal");
    const overlay = document.querySelector("#overlay");
    const cancel = document.querySelector("#cancelBtn");
    const editBtn = document.querySelector("#editBtn");
    const postT = document.querySelector("#editTitle");
    const postD = document.querySelector("#editDescription");
    let doc = "";

    //Listener para cada icono de editar
    editI.forEach(icon => {
        icon.addEventListener("click", async () => {
            doc = await editPosts(icon.id);
            console.log(doc)
            const data = doc.data();
            postT.value = data.title;
            postD.value = data.description;
            editBtn.value = icon.id;
            overlay.style.display = "block";
            editModal.style.display = "block";
        });
    });

    //Listener para el boton de cancelar edición
    cancel.addEventListener("click", (e) => {
        e.preventDefault();
        editModal.style.display = "none";
        overlay.style.display = "none";
    });

    //Listener para el botón que guarda la edición
    editBtn.addEventListener("click", (e) => {
        e.preventDefault();
        return updateEdit(editBtn.value, {
            title: postT.value,
            description: postD.value
        })
            .then(() => {
                console.log("Document successfully update!");
                window.alert("¡Tus cambios se han guardado exitosamente!");
                getPosts();
                editModal.style.display = "none";
                overlay.style.display = "none";
            }).catch((error) => {
                console.error("Error update document: ", error);
                window.alert("Ocurrió un error, vuelve a intentarlo");
            });
    });
};

export const likesDom = (postInfo) => {
    setTimeout(() => {
        const btnLike = document.querySelector(`.btnLike[data-id="${postInfo.id}"]`);
        btnLike.addEventListener("click", (e) => {
            if (postInfo.likes && postInfo.likes.some(likes =>//some= para validar si algo existe dentro de un array
                likes === getCurrentUser().uid)) return;
            let counter = document.querySelector(`#likePost${e.target.dataset.id}`).innerHTML
            let prevLikes = [];
            if (Array.isArray(postInfo.likes)) {//recibe una variable y devuelve true o false. Si es un array true, sino false 
                prevLikes = postInfo.likes
            }
            counter++;
            document.querySelector(`#likePost${e.target.dataset.id}`).innerHTML = counter;
            updateLikes(e.target.dataset.id, [...prevLikes, getCurrentUser().uid]);//desarmamos el like que esta en base de datos y se agrega el nuevo
        })
    }, 300);
}

