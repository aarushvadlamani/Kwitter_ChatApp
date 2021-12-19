
//ADD YOUR FIREBASE LINKS
var firebaseConfig = {
    apiKey: "AIzaSyCLGXHslg6g1dqynGaHQPkJCPIr0AztWBA",
    authDomain: "kwitter-app-c0f93.firebaseapp.com",
    databaseURL: "https://kwitter-app-c0f93-default-rtdb.firebaseio.com",
    projectId: "kwitter-app-c0f93",
    storageBucket: "kwitter-app-c0f93.appspot.com",
    messagingSenderId: "671423562573",
    appId: "1:671423562573:web:b3e2a06934638e3b766d04",
    measurementId: "G-LLFRWBE5EZ"
  };
  
  // Initialize Firebase
   firebase.initializeApp(firebaseConfig);
   function addUser(){
       user_name = document.getElementById("user_name").value;
       firebase.database().ref("/").child(user_name).update({
           purpose: "adding user"
       });
   }