//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyC24ZcX6aBe0cyCeu-XQ2svpVGRclfSnS8",
      authDomain: "kwitter-b9ebe.firebaseapp.com",
      databaseURL: "https://kwitter-b9ebe-default-rtdb.firebaseio.com",
      projectId: "kwitter-b9ebe",
      storageBucket: "kwitter-b9ebe.appspot.com",
      messagingSenderId: "14204201561",
      appId: "1:14204201561:web:c276768765b27eee2e1f48"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
  //ADD YOUR FIREBASE LINKS

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id);
console.log(message_data);
name = message_data['name'];
message = message_data['message'];
like = message_data['like'];
name_with_tag = "<h4> "+ name +"<img class='user_tick' src=tick.png'></h4>";
message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";


//End code
      } });  }); }
getData();
function send()
{
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            name:user_name,
            message:msg,
            like:0
            });

            document.getElementById("msg").value = "";
}
function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}