$(document).foundation().ready(function(){
	

//------------------------------------------------------------------------------------------------------------------------------------	
//var user = sessionStorage.getItem("session")
var user = firebase.auth().currentUser;
firebase.auth().onAuthStateChanged(function(user) {
	if(user){
		console.log("logged in")
		var m = document.querySelector("#securePage1")
		m.style.display="inline"
		m=document.querySelector("#securePage2")
		m.style.display="inline"
		var n= document.querySelector("#loginPage")
		n.style.display="none"
	}else{
	console.log("Logged out")	
	}
})
/*
if(user){
//console.log(user.uid)
var m = document.querySelectorAll("#securePage")
m[0].style.display="inline"
m[1].style.display="inline"
var n= document.querySelector("#loginPage")
n.style.display="none"
console.log("logged")	
}else{
console.log("logged out")
}
*/
//---------------------------------------------------------------------------------------------------------------------------------------
var dtnow=new Date();
options={
	hour12: true
}
console.log(dtnow.toLocaleString("en-US",options));
document.querySelector(".dtnow").innerHTML=dtnow.toLocaleString("en-US",options);
//-----------------------------------------------------------------------------------------------------------------------------------

function changeImage(){
	obj = document.querySelector("#changer");
		console.log("changing image",obj.src);
	if(obj.src.includes("presence.jpg")){
		obj.setAttribute("src","images/choice.jpg");
	}
	else{
		obj.setAttribute("src","images/presence.jpg");
	}
}

document.querySelector("#changer").addEventListener("click",changeImage);
//---------------------------------------------------------------------------------------------------------------------------------------
if(document.querySelector(".subscribe")){
document.querySelector(".subscribe").addEventListener("click",function(){


	var m = document.createElement("div")
	m.id="Mymodal"
	m.classList.add("reveal")
	m.setAttribute("data-reveal","")
	m.style.backgroundColor="#F5AE2C"
	m.style.alignItems="center"
		var br = document.createElement("br");
		var br1 = br
		var br2= br
		var br3 = br
		var para = document.createElement("p")
		para.style.textAlign="center"
		para.style.fontWeight="600"
		para.style.fontSize="1.8"
			var txts = document.createTextNode(`
			Get more free content each month helping you focus on your life.And Most of all get free connections to top coaches.
			`)
		
		para.appendChild(txts)
		//var label = document.createElement("label")
		//var ltext = document.createTextNode("Email: ")
		//label.style.fontSize="1.25em"
		//label.appendChild(ltext)
		var inp = document.createElement("input")
		inp.style.size="50"
		inp.style.marginRight="10px"
		inp.style.padding="10px"
		inp.style.borderRadius="10px"
		inp.placeholder="example@email.com"
		var btn = document.createElement("button")
		btn.value="Submit"		
		btn.style.backgroundColor="#44355b"
		btn.style.border="5px solid #44355b"
		btn.style.borderRadius="10px"
		btn.style.color="white"
		btntxt = document.createTextNode("Subscribe")
		btn.appendChild(btntxt)
		//para.appendChild(label)
		para.appendChild(inp)
		para.appendChild(br3)
		para.appendChild(btn)
		var closelink = document.createElement('button')
		//closelink.href= "/~hknagark/Assignment6/Testimonials.html"
		closelink.className="close-button"
		closelink.setAttribute("data-close","")
		closelink.setAttribute("aria-label","Close Modal")
		closelink.setAttribute("type","button")
			var closeArrow= document.createElement("span")
			closeArrow.setAttribute("aria-hidden","true")
				closetext=document.createTextNode("Close Window")
				closeArrow.style.fontSize="0.5em"
	closeArrow.appendChild(closetext)
	closelink.appendChild(closeArrow)
	var img = document.createElement("img")
	img.src="images/namaste.png"
	img.style.width="10em"
	img.style.height="15em"
	para.appendChild(img)
	m.appendChild(br1)
	m.appendChild(br2)
	m.appendChild(para)
	m.appendChild(closelink)
	document.body.appendChild(m)

	var popup = new Foundation.Reveal($('#Mymodal'));
	popup.open();
});

}

//-----------------------------------------------------------------------------------------------------------------------------------------------------
/*
firebase.auth().onAuthStateChanged(function(user) {
  if (user) {
    // User is signed in.
    var displayName = user.displayName;
    var email = user.email;
    var emailVerified = user.emailVerified;
    var photoURL = user.photoURL;
    var isAnonymous = user.isAnonymous;
    var uid = user.uid;
    var providerData = user.providerData;
    // ...
  } else {
    // User is signed out.
    // ...
  }
})
*/
//-------------------------------------------------------------------------------------------------------------------------------------------------------------
const loginForm = document.querySelector('.log-in-form');

if(loginForm){
	
	
document.querySelector("#Login").addEventListener('click', (e) => {
  e.preventDefault();
	console.log(e)
  // get user info
  const email = document.querySelector("#email").value;
  const password = document.querySelector("#password").value;
  
     if (email.length < 4) {
          alert('Please enter an email address.');
          return;
        }
        if (password.length < 4) {
          alert('Please enter a password.');
          return;
        }
	console.log("whats",email,password) 
	firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
          // Handle Errors here.
		  console.log("inside it")
          var errorCode = error.code;
          var errorMessage = error.message;
          // [START_EXCLUDE]
          if (errorCode === 'auth/wrong-password') {
            alert('Wrong password.');
          } else {
            alert(errorMessage);
          }
          console.log(error,"pass");
		  
          //document.getElementById('quickstart-sign-in').disabled = false;
          // [END_EXCLUDE]
        });
        // [END authwithemail]
		var user = firebase.auth().currentUser;
		var caught=firebase.auth().onAuthStateChanged(user)

		
		//sessionStorage.setItem('session',user.uid)
		
		window.location.href="/~hknagark/Assignment6/Contact_Us.html"
      })
      //document.getElementById('quickstart-sign-in').disabled = true;
	

//---------------------------------------------------------------------------------------------------------------------------------------------------------------------
	
document.querySelector("#Signup").addEventListener('click', (e) => {
  e.preventDefault();
	console.log(e)
  // get user info
  const email = document.querySelector("#email").value;
  const password = document.querySelector("#password").value;
  
     if (email.length < 4) {
          alert('Please enter an email address.');
          return;
        }
        if (password.length < 4) {
          alert('Please enter a password.');
          return;
        }
	console.log("whats") 	  
	  
	firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorCode);
    console.log(errorMessage);
  });
	window.location.href="/~hknagark/Assignment6/login.html"
})


 
}
//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------
function signoutfunction(){
firebase.auth().signOut().then(function() {
  // Sign-out successful.
  console.log('User Logged Out!');
}).catch(function(error) {
  // An error happened.
  console.log(error);
})

};

var signout = document.querySelector("#btlogout")
if(signout){
signout.addEventListener("click",function() {
  //e.preventDefault();

firebase.auth().signOut().then(function() {
  // Sign-out successful.
  console.log('User Logged Out!');
}).catch(function(error) {
  // An error happened.
  console.log(error);
})
window.location.href="/~hknagark/Assignment6/login.html"  

})

}

})
