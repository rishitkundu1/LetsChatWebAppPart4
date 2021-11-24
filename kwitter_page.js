user_name = localStorage.getItem("user_name"); 
room_name = localStorage.getItem("room_name");
//YOUR FIREBASE LINKS
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

function send(){
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name : user_name,
            message : msg,
            like : 0
      });
}
    
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
      name = message_data['name'];
      message = message_data['message']
      like = message_data['like']
      name_with_tag = "<h4>" + name + "<img class='user_tick' src='image-removebg-preview.png'></h4>";
      message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
      like_button = "<button class='likebtn' id='" + firebase_message_id + "' value='" + like + "' onclick='updateLike(this.id)'>"
      span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'></span> Like: " + like + "</button><hr>";
      row = name_with_tag + message_with_tag + like_button + span_with_tag;
      document.getElementById("output").innerHTML += row;
//End code
      } });  }); }
getData();

function updateLike(message_id){
      console.log(" clicked on like button - " + message_id);
      button_id = message_id;
      likes = document.getElementById(button_id).value;
      updated_likes = Number(likes) + 1;
      console.log(updated_likes);

      firebase.database().ref(room_name).child(message_id).update({
            like : updated_likes
      });
}
function logout(){
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location.replace("index.html")
}