console.log("Firebase script is connected!");
// import dotenv from "dotenv";
// dotenv.config() ; 
// console.log(process.env.API_KEY)
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-analytics.js";
  import { getAuth, createUserWithEmailAndPassword ,
    GoogleAuthProvider ,
    signInWithPopup
   } from "https://www.gstatic.com/firebasejs/12.9.0/firebase-auth.js";

   
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyBSAop_oP2RsxM4iGv9NtsVq46Wo-KRS-A" ,
    authDomain: "fir-login-signup-wma.firebaseapp.com",
    projectId: "fir-login-signup-wma",
    storageBucket: "fir-login-signup-wma.firebasestorage.app",
    messagingSenderId: "199141690287",
    appId: "1:199141690287:web:4a44b88a4755aa8e6ebd5a",
    measurementId: "G-Q9N56M34QL"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);

  // continue w google
  var googlebtn = document.getElementById("google");
  googlebtn.addEventListener("click" , google)
  
  var submit = document.getElementById('btn') ; 

  submit.addEventListener("click" , function(event){
    event.preventDefault()
    var email = document.getElementById('email').value ;
  var password = document.getElementById('password').value ; 
    const auth = getAuth();
createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    alert("Creating account...")
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    alert(errorMessage)
    // ..
  });
  })


// cont w google
const auth = getAuth();
  const provider = new GoogleAuthProvider();

function google() {
signInWithPopup(auth, provider)
  .then((result) => {
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
    const user = result.user;
   window.location.href = "result.html"
    console.log("google user =>" , user.providerData[0].displayName)
  }).catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    const email = error.customData.email;
    const credential = GoogleAuthProvider.credentialFromError(error);
    // ...
    alert(errorMessage)
  });
}