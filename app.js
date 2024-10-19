 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js";
 import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-auth.js";
 import { getFirestore, collection, addDoc } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-firestore.js";

 // Your web app's Firebase configuration
 const firebaseConfig = {
     apiKey: "AIzaSyA5maAYAhswgSTsDqefztN8E9xiacC1CT4",
     authDomain: "app2-fd83d.firebaseapp.com",
     projectId: "app2-fd83d",
     storageBucket: "app2-fd83d.appspot.com",
     messagingSenderId: "821417454877",
     appId: "1:821417454877:web:74e77cb1c34f4a95f885f4"
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const db = getFirestore(app);
 
// Initialize Cloud Firestore and get a reference to the service
console.log(db , "db")

 async function signup (){
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value
    const name = document.getElementById("name").value
    const phone = document.getElementById("number").value

    const auth = getAuth(app);
    const db = getFirestore(app);

    // firestore
    try {
        const docRef = await addDoc(collection(db, "userdata"), {
          name :name,
          phone : phone
        });
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }


createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    alert("signup sucessfully")
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage)
    // ..
  });
    
  }
 





  function login(){

    const email = document.getElementById("email").value
    const password = document.getElementById("password").value
    const auth = getAuth();
signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    alert("login succesfully")
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    console.log(errorMessage)
  });
  }





  const btn = document.getElementById("btn")
  btn.addEventListener("click", signup)


  const btnn = document.getElementById("btnn")
  btnn.addEventListener("click", login)