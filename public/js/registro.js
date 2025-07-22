const $ = el => document.querySelector(el)

const form = $('#registerForm')

form.addEventListener('submit', (e) => {
  e.preventDefault()

  const name = $('#name').value
  const email = $('#email').value
  const password = $('#pass').value

  const user = {
    name,
    email,
    password
  }

  console.log(user)

  fetch('http://localhost:3000/api/users/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
  }).then(result => result.json())
    .then(data => console.log(data))
})
