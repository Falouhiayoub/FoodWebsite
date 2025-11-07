document.getElementById('contactForm').addEventListener('submit', (e) => {
  e.preventDefault(); //prevent the page loading again

const name = document.getElementById('name')
const email = document.getElementById("email")
const message = document.getElementById("message")
const formMessage = document.getElementById("formMessage")


// check empty fields 

if(name.value.trim() === "" || email.value.trim() === "" || message.value.trim() ==="") {
  formMessage.textContent = "please Enter all fields"
  formMessage.className = "error"
  return
}


formMessage.textContent ='Your message has been sent successfully'
formMessage.className = "success"

name.value =""
email.value =""
message.value =""
})


