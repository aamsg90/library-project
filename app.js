const togglebutton = document.getElementsByClassName("toggle-button")[0];

const navbarLinks = document.getElementsByClassName("navbar-links")[0];

togglebutton.addEventListener("click", () => {
   console.log(navbarLinks.classList.toggle("active"));
});

// registeration form

// input fields
const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const user = document.getElementById("user");
const email = document.getElementById("email");
const password = document.getElementById("password");
const bio = document.getElementById("bio");

// initiate data model
let data = [];
data = JSON.parse(localStorage.getItem("account")) || [];

// add event litener to form

const form = document.getElementById("form");
form.addEventListener("submit", (event) => {
   event.preventDefault();

   //creat account instance
   const userAcount = new Account(
      firstName.value,
      lastName.value,
      user.value,
      email.value,
      password.value,
      bio.value
   );

   //  check if accpunt exist
   const emailCheck = userAcount.doesAccountExist(userAcount.email);

   //  console.log(userAcount.email)

   if (emailCheck) {
      alert("user exisit");
      throw new Error("user already exisit");
   } else {
      data.push(userAcount);
      localStorage.setItem("account", JSON.stringify(data));
   }
   // this bellow function reload the page when submitting the form
   window.location.reload()
});

// get all acounts
const account = document.getElementById("account")

function getAllAccount(){
   let value = "";
   data.map((item)=>{
      value += `
      <div class="card">
         <p> Name: ${item.firstName} ${item.lastName}</p>
         <p> Username: ${item.user}</p>
         <p> Email: ${item.email}</p>
         <p> Bio: ${item.bio}</p>
         
      </div>
      `
   })
   account.innerHTML = value

}
getAllAccount()

class Account {
   constructor(firstName, lastName, user, email, password, bio) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.user = user;
      this.email = email;
      this.password = password;
      this.bio = bio;
   }

   doesAccountExist(email) {
      if (!data) return;

      const check = data.find((value) => value.email === email);
      // console.log(check)

      return check;
   }

   
}
