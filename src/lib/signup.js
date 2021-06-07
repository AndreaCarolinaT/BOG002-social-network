import { signUp } from "./firebaseAuth.js";

const signUpForm = document.getElementById("signUpForm");

signUpForm.addEventListener("submit", (e) => {
    const emailSignUp = document.getElementById("emailSignUp").value;
    const passwordSignUp = document.getElementById("passwordSignUp").value;
    e.preventDefault();
    signUp(emailSignUp, passwordSignUp)
});

//google login 
const googleBtn = document.getElementById("googleLogin");
googleBtn.addEventListener("click", () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider)
        .then((result) => {
            return result
        })
        .catch((error) => {
            return error.message
        })
})

