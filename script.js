
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js"
import { getDatabase,ref,push,set } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-database.js"
const appSettings = {
    databaseURL: "https://munnew-844b8-default-rtdb.firebaseio.com/"
}
const app=initializeApp(appSettings)
const database=getDatabase(app)


    document.getElementById('register2').addEventListener("click", submitForm1);
    document.getElementById('register3').addEventListener("click", submitForm2);


var db_ref1 = ref(database, "records of single delegates")
var db_ref2 = ref(database, "records of Conference ambassadors")

function getInput(id) {
    let abc= document.getElementById(id).value;
    if (abc==null){return " "}
    else{return abc}
}

function submitForm1(e) {
  
    e.preventDefault();
    saveRec1(getInput('name_field'), getInput('email_field'), getInput('pref1'), getInput('pref2'), getInput('pref3'), getInput('delegatecountry'), getInput('age'),getInput('gender'),getInput('Institute'),getInput('region'),getInput('muncount'),getInput('pastaward'),getInput('refferalcode'),);
   
}
function submitForm2(e) {
  
  e.preventDefault();
  saveRec2(getInput('name_field'), getInput('email_field'), getInput('pref1'), getInput('pref2'), getInput('pref3'), getInput('delegatecountry'), getInput('age'),getInput('gender'),getInput('Institute'),getInput('region'),getInput('muncount'),getInput('pastaward'),getInput('refferalcode'),);
 
}
function saveRec1(name, email,pref1,pref2,pref3,delegatecountry,age,gender,Institute,region,muncount,pastaward,refferalcode) {
    const dbRef1 = ref(database, "records of single delegates");
    if(pref1!=pref2&&pref2!=pref3){
    const newRec = push(dbRef1);
    set(newRec, {
      name: name,
      email: email,
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
function saveRec2(name, email,pref1,pref2,pref3,delegatecountry,age,gender,Institute,region,muncount,pastaward,refferalcode) {
  const dbRef2 = ref(database, "records of Conference ambassadors");
  if(pref1!=pref2&&pref2!=pref3){
  const newRec = push(dbRef2);
  set(newRec, {
    name: name,
    email: email,
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




function sendEmail() {
  
  const client = new SMTPClient({
    user: 'shivanshu264@gmail.com',
    password: 'AAABF29A67675B4499210685C5077A2BDB87',
    host: 'smtp.elasticemail.com',
    ssl: true,
    port:2525
  });
  
  
  client.send(
    {
      text: 'i hope this works',
      from: 'shivanshu264@gmail.com>',
      to: 'shivanshur203@gmail.com>',
      cc: 'else <shivanshur203@gmail.com>',
      subject: 'testing emailjs',
    },
    (err, message) => {
      console.log(err || message);
    }
  );
}

document.getElementById("register1").addEventListener("click",function(){
  const name = document.getElementById("name_field").value;
  const age = document.getElementById("age").value;
  const gender = document.getElementById("gender").value;
  const institute = document.getElementById("Insitute").value;
  
  const email = document.getElementById("email_field").value;
  
  if (name && age && gender && institute && region && email) {
   
    document.getElementById("register2").style.display = "inline";
    document.getElementById("register3").style.display = "inline";
    document.getElementById("transformtotext").innerHTML = `<h1 class="newbuttoncont">Register as:</h1>`;
  } else {
    
    alert("Please fill in all the important inputs first.");
  }})
