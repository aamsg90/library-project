const togglebutton = document.getElementsByClassName('toggle-button')[0]

const navbarLinks = document.getElementsByClassName('navbar-links')[0]

togglebutton.addEventListener('click', () => {
   console.log( navbarLinks.classList.toggle('active'))
})