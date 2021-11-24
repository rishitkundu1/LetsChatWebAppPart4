
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAsH71XJvpkBdXwYjie_6wz0c3Q_04rptk",
  authDomain: "kwitter-b185e.firebaseapp.com",
  databaseURL: "https://kwitter-b185e-default-rtdb.firebaseio.com",
  projectId: "kwitter-b185e",
  storageBucket: "kwitter-b185e.appspot.com",
  messagingSenderId: "507869025650",
  appId: "1:507869025650:web:6fc3be89e4034f81dfb9eb",
  measurementId: "G-6YY7PZPRLB"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);



function addUser(){
  username = document.getElementById("username").value;
  firebase.database().ref("/").child(username).update({
    purpose : "adding user"
  })
  localStorage.setItem("user_name",username);
  window.location = "kwitter_room.html"
}
