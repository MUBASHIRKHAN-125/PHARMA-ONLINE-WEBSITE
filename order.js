const Messagesend = () => {
(function(){
        emailjs.init({
          publicKey: "Ql5XR0NamqOZmaaX3",
        });
     })();

     let firstName = document.getElementById("firstname").value;
     let lastName = document.getElementById("lastname").value;
     let userEmail= document.getElementById("email").value;
     let userMess = document.getElementById("message").value;
     let usersub = document.getElementById("subject").value;

     if(!firstName , !lastName ,!userEmail , !userMess , !usersub ){
        alert("... PLEASE FILL INPUT ...");
        return;
     }

     let userDetail = {
        first_name : firstName,
        last_name : lastName,
        email : userEmail,
        message : userMess,
        subject : usersub
     }
     emailjs.send("service_e4j4fue" , "template_tf36zko" , userDetail)
.then((response) => {
    alert("ORDER COMPLETE YOUR ITEM 24 HOURS DELEVER");
      window.location.href="index.html";
})
.catch((error) => {
    console.log(error);
})
}


