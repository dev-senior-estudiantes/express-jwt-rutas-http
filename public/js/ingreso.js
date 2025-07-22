const $ = el => document.querySelector(el)

const form = $('#loginForm')

form.addEventListener('submit', (e) => {
  e.preventDefault()

  const email = $('#email').value
  const password = $('#pass').value

  const user = {
    email,
    password
  }

  console.log(user)

  fetch('http://localhost:3000/api/users/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
  }).then(result => result.json())
    .then(data => console.log(data))
})
