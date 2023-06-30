
import { initializeApp} from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js"
import { getDatabase,ref,push,set } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-database.js"
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-analytics.js";
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-auth.js";
// Import the functions you need from the SDKs you need


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAYLIn8hGjgVrX3h23aVZPx47Sn8bZBCz4",
  authDomain: "mun-2023.firebaseapp.com",
  databaseURL: "https://mun-2023-default-rtdb.firebaseio.com",
  projectId: "mun-2023",
  storageBucket: "mun-2023.appspot.com",
  messagingSenderId: "843433332162",
  appId: "1:843433332162:web:faa917397b259754461a5b",
  measurementId: "G-L3C80FWLKS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();



const analytics = getAnalytics(app);

const database=getDatabase(app)


    document.getElementById('register2').addEventListener("click", submitForm1);
    document.getElementById('register3').addEventListener("click", submitForm2);


var db_ref1 = ref(database, "records of single delegates")
var db_ref2 = ref(database, "records of Conference ambassadors")

function getInput(id) {
    let abc= document.getElementById(id).value;
    if (id==pastaward||id==refferalcode){return " "}
    else{return abc}
}

function submitForm1(e) {
  
    e.preventDefault();
    
    signup()
    saveRec1(getInput('name_field'), getInput('email_field'),getInput('password'), getInput('pref1'), getInput('pref2'), getInput('pref3'), getInput('delegatecountry'), getInput('age'),getInput('gender'),getInput('Institute'),getInput('region'),getInput('muncount'),getInput('pastaward'),getInput('refferalcode'),);
   
}
function submitForm2(e) {
  
  e.preventDefault();
  signup()
  saveRec2(getInput('name_field'), getInput('email_field'),getInput('password'), getInput('pref1'), getInput('pref2'), getInput('pref3'), getInput('delegatecountry'), getInput('age'),getInput('gender'),getInput('Institute'),getInput('region'),getInput('muncount'),getInput('pastaward'),getInput('refferalcode'),);
 
}
function saveRec1(name,email,password,pref1,pref2,pref3,delegatecountry,age,gender,Institute,region,muncount,pastaward,refferalcode) {
    const dbRef1 = ref(database, "records of single delegates");
    if(pref1!=pref2&&pref2!=pref3){
    const newRec = push(dbRef1);
    set(newRec, {
      name:name,
      email:email,
      Password:password,
      delegatecountry: delegatecountry,
      preference1:pref1,
      preference2:pref2,
      preference3:pref3,
      Age:age,
      Gender:gender,
      Institute:Institute,
      Region:region,
      MUNcount:muncount,
      PastAwards:pastaward,
      Referralcode:refferalcode

    }).then(() => {
      // Registration successful
      
      alert("Registration successful! Check your Email!");
     
    }).catch((error) => {
      // Error handling
      alert("Registration failed: " + error.message);

    });
    document.getElementById("registrationForm").reset();
}
else{
    alert("Preferences can't be same!")
}
}
function saveRec2(name,email,password,pref1,pref2,pref3,delegatecountry,age,gender,Institute,region,muncount,pastaward,refferalcode) {
  const dbRef2 = ref(database, "records of Conference ambassadors");
  if(pref1!=pref2&&pref2!=pref3){
  const newRec = push(dbRef2);
  set(newRec, {
    name:name,
    email:email,
    Password:password,
    delegatecountry:delegatecountry,
    preference1:pref1,
    preference2:pref2,
    preference3:pref3,
    Age:age,
    Gender:gender,
    Institute:Institute,
    Region:region,
    MUNcount:muncount,
    PastAwards:pastaward,
    Referralcode:refferalcode

  }).then(() => {
    // Registration successful
    
    alert("Registration successful! Check your Email!");
   
  }).catch((error) => {
    // Error handling
    alert("Registration failed: " + error.message);
  });
  document.getElementById("registrationForm").reset();
}
else{
  alert("Preferences can't be same!")
}
}





  
  








var ab=false;
  function signup(){
    var email = document.getElementById("email_field").value;

    console.log(email)
    var password=document.getElementById("password").value;
  createUserWithEmailAndPassword(auth,email,password)
    .then((userCredential) => {
      // Signed in 
      const user = userCredential.user;
      ab=true;
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      
      alert(errorMessage);
      // ..
    });}