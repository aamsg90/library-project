const togglebutton = document.getElementsByClassName('toggle-button')[0]

const navbarLinks = document.getElementsByClassName('navbar-links')[0]

togglebutton.addEventListener('click', () => {
   console.log( navbarLinks.classList.toggle('active'))
});


// registeration form 

// input fields 
const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const user = document.getElementById("user");
const email = document.getElementById("email");
const password = document.getElementById("password");
const bio = document.getElementById("bio");

// add event litener to form

const form = document.getElementById("form")
form.addEventListener("submit", (event)=>{
   event.preventDefault()
   console.log(firstName)
   // console.log(`${firstName.ariaValueMax.toUpperCase}`)

//creat account instance 

})

class Account {
   constructor(firstName, lastName, user, email, password, bio){
   this.firstName= firstName;
   this.lastName = lastName;
   this.user = user;
   this.email = email;
   this.password = password;
   this.bio = bio;
}
}