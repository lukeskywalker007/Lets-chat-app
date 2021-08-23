function logout()
{
    user= document.getElementById("earphones").value;
    localStorage.setItem("username",user);
window.location="kwitter_room.html";
}
