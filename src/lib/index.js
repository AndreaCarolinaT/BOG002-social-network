import { signUp } from "./firebaseAuth.js";

const signUpForm = document.getElementById("signUpForm");

signUpForm.addEventListener("submit", (e) => {
    const emailSignUp = document.getElementById("emailSignUp").value;
    const passwordSignUp = document.getElementById("passwordSignUp").value;
    e.preventDefault();
    signUp(emailSignUp, passwordSignUp)
});
