import { initializeApp } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-app.js";
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged, signOut, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCI_VTBj8inrJWIjIYf_Y7bBpT9aRRQS1o",
    authDomain: "user-app-289f1.firebaseapp.com",
    databaseURL: "https://user-app-289f1.firebaseio.com",
    projectId: "user-app-289f1",
    storageBucket: "user-app-289f1.appspot.com",
    messagingSenderId: "438369021654",
    appId: "1:438369021654:web:8138ce7351d51603c0a377"
};

// Initialize Firebase
initializeApp(firebaseConfig);
const auth = getAuth();

onAuthStateChanged(auth, user => {
    console.log(user);
    if (user) {
        userIsSignedIn();
    } else {
        userIsSignedOut();
    }
});

function userIsSignedIn() {
    location.hash = "#home";
    document.querySelector("nav").classList.remove("hide");
    displayUserInfo();
}

function displayUserInfo() {
    document.querySelector("#profile .mail").textContent = auth.currentUser.email;
}

function userIsSignedOut() {
    location.hash = "#signin";
    document.querySelector("nav").classList.add("hide");
}

function signIn(event) {
    event.preventDefault();
    const mail = event.target.mail.value;
    const password = event.target.password.value;

    signInWithEmailAndPassword(auth, mail, password)
        .then(userCredential => {
            // Signed in
            const user = userCredential.user;
            console.log(user);
            document.querySelector("#signin-message").textContent = "";
        })
        .catch(error => {
            console.log(error);
            document.querySelector("#signin-message").textContent = error.message;
        });
}

function signUp(event) {
    event.preventDefault();
    const mail = event.target.mail.value;
    const password = event.target.password.value;

    createUserWithEmailAndPassword(auth, mail, password)
        .then(userCredential => {
            // Signed in
            const user = userCredential.user;
            console.log(user);
            document.querySelector(".signup-message").innerHTML = "";
        })
        .catch(error => {
            console.log(error);
            document.querySelector(".signup-message").innerHTML = error.message;
        });
}

function signOutUser() {
    signOut(auth);
}

export { signIn, signOutUser, signUp };
