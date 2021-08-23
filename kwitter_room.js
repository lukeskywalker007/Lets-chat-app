getusername=localStorage.getItem("username");
document.getElementById("head").innerHTML="Welcome "+getusername+"!";
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyCvaeQyq7teBqSA764UulWFBxkAPPECEfE",
      authDomain: "chat-app-56d65.firebaseapp.com",
      databaseURL: "https://chat-app-56d65-default-rtdb.firebaseio.com",
      projectId: "chat-app-56d65",
      storageBucket: "chat-app-56d65.appspot.com",
      messagingSenderId: "482969818765",
      appId: "1:482969818765:web:84f5556ce3485dca1f34c4"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
console.log("room name -"+Room_names);
row= "<div class='room_name' id="+Room_names+" onclick='redirecttoroomname(this.id)'>#"+Room_names+"</div><hr>"
document.getElementById("output").innerHTML +=row;
      //End code
      });});}
getData();

function addroom()
{
      roomname=document.getElementById("in").value;
      firebase.database().ref("/").child(roomname).update(
            {
                  purpose:"addroomname"
            }
      );
      localStorage.setItem("addroom",roomname);
      
}
function redirecttoroomname(name)
{
    console.log("redirecttoroomname is working");
      console.log(name);
    localStorage.setItem("Room_name",name);  
    window.location="kwitter_page.html";
}
function logout()
{
      localStorage.removeItem("username");
      localStorage.removeItem("room_name");
      window.location="index.html";
}
