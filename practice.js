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
//ADD YOUR FIREBASE LINKS
function addusername()
{
    username=document.getElementById("in").value;
    firebase.database().ref("/").child(username).update({
        purpuose:"addinguser"
    })
}