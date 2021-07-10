var firebaseConfig = {
    apiKey: "AIzaSyBEez1AH3wL9lzC_1LsPRHLYu7rLaJGiog",
    authDomain: "kwitteringprojecthw.firebaseapp.com",
    databaseURL: "https://kwitteringprojecthw-default-rtdb.firebaseio.com",
    projectId: "kwitteringprojecthw",
    storageBucket: "kwitteringprojecthw.appspot.com",
    messagingSenderId: "640589781598",
    appId: "1:640589781598:web:4cdad350bfbfc47fc832cf",
    measurementId: "G-YN57BRV8F2"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  user_name=localStorage.getItem("user_name");
  room_name=localStorage.getItem("room_name");
  
  function send()
  {
      msg=document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
          name1:user_name,
          message:msg,
         like:0
      });
      document.getElementById("msg").value="";
  }

  function LOGOUT()
{
   localStorage.removeItem("Username");
   localStorage.removeItem("Roomname")
   window.location = "index.html";
}