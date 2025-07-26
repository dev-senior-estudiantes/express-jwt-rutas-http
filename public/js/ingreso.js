const $ = el => document.querySelector(el)

const form = $('#loginForm')

form.addEventListener('submit', async (e) => {
  e.preventDefault()

  const email = $('#email').value
  const password = $('#pass').value

  const user = {
    email,
    password
  }

  console.log(user)

  const response = await fetch('/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
  }).then(result => result.json())

  console.log(response)

  if (response.error) {
    return
  }

  window.localStorage.setItem('sessionToken', response.token)
  window.location.href = '/dashboard'
})
