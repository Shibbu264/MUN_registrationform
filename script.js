
import { SMTPClient } from './emailjs';
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-app.js"
import { getDatabase,ref,push,set } from "https://www.gstatic.com/firebasejs/9.23.0/firebase-database.js"
const appSettings = {
    databaseURL: "https://munnew-844b8-default-rtdb.firebaseio.com/"
}
const app=initializeApp(appSettings)
const database=getDatabase(app)


    document.getElementById('registrationForm').addEventListener("submit", submitForm);


var db_ref = ref(database, "records")

function getInput(id) {
    return document.getElementById(id).value;
}

function submitForm(e) {
    e.preventDefault();
    saveRec(getInput('name_field'), getInput('email_field'), getInput('country_field'), getInput('pref1'), getInput('pref2'), getInput('pref3'), getInput('delegatecountry'), getInput('age'));
   
}
function saveRec(name, email, country,pref1,pref2,pref3,delegatecountry,age) {
    const dbRef = ref(database, "records");
    if(pref1!=pref2&&pref2!=pref3){
    const newRec = push(dbRef);
    set(newRec, {
      name: name,
      email: email,
      country: country,
      preference1:pref1,
      preference2:pref2,
      preference3:pref3,
      Delegate_country:delegatecountry,
      Age:age
    }).then(() => {
      // Registration successful
      sendEmail()
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
