import { initViews } from "./view-router.js";
import { signIn, signOutUser, signUp } from "./auth.js";

window.addEventListener("load", initApp);

function initApp() {
    console.log("app.js is running 🎉");
    initViews();
    document.querySelector("#form-signin").addEventListener("submit", signIn);
    document.querySelector("#form-signup").addEventListener("submit", signUp);
    document.querySelector("#btn-sign-out").addEventListener("click", signOutUser);
}
