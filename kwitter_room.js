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
    
var username = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = `Welcome , ${username} !`;

function addRoom() {
      roomName = document.getElementById("room_name").value;
      firebase.database().ref("/").child(roomName).update({
            purpose: "adding room name"
      })
      localStorage.setItem("room_name", roomName);
      window.location = "kwitter_page.html";
}

function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  //Start code
                  console.log("Roomname - " + Room_names);
                  row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)'> #" + Room_names + "</div><hr>";
                  document.getElementById("output").innerHTML += row;


                  //End code
            });
      });
}
getData();

function redirectToRoomName(name) {
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}