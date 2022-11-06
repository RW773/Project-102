const firebaseConfig = {
      apiKey: "AIzaSyCyLROfw3wy2lAjdgST8_xSqZapUSNJgbM",
      authDomain: "project-100-9db9c.firebaseapp.com",
      projectId: "project-100-9db9c",
      storageBucket: "project-100-9db9c.appspot.com",
      messagingSenderId: "444324157129",
      appId: "1:444324157129:web:0f00503b2b0cc9cee45f18",
      measurementId: "G-3JH5S7V8C7"
    };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      onsole.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
   
      //End code
      });});}
getData();
function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "kwitter_page.html";
}
