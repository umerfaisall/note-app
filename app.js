const firebaseConfig = {
    apiKey: "AIzaSyAQRVPS7FuReSJnTsh1Var11YtZFY4q1zE",
    authDomain: "note-app-2a034.firebaseapp.com",
    databaseURL: "https://note-app-2a034-default-rtdb.firebaseio.com",
    projectId: "note-app-2a034",
    storageBucket: "note-app-2a034.appspot.com",
    messagingSenderId: "867812710225",
    appId: "1:867812710225:web:3250aa4f7316d56a80a570"
  };
const frb = firebase.initializeApp(firebaseConfig);
 console.log(frb.database);

 

const notescontainer = document.querySelector(".notes-container");
const createbtn = document.querySelector(".btn");
let notes = document.querySelectorAll(".input-box");

 firebase.database().ref("notes").on("child_added", (data) => {


  let inputBox = document.createElement("p");
  let img = document.createElement("img");
  inputBox.className = "input-box";
  inputBox.setAttribute("contenteditable", "true");
  inputBox.innerText = data.val().value; 
    inputBox.setAttribute("data-key", data.key);
  img.src = "images/dlt.svg";
  notescontainer.appendChild(inputBox).appendChild(img);

 })
 function createnotes() {
  let inputBox = document.createElement("p");


  var key = firebase.database().ref("notes").push().key;
  let obj = {
    value: inputBox.innerText,
    key: key
  };
  firebase.database().ref("notes").child(key).set(obj);
  
 }



notescontainer.addEventListener("click", function(a){
  if(a.target.tagName === "IMG"){
    let key = a.target.parentElement.getAttribute("data-key");
    firebase.database().ref("notes").child(key).remove();
    a.target.parentElement.remove();
  }
})