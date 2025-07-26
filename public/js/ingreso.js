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

  try {
    const response = await fetch('http://localhost:3000/login', {
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

    window.location.href = '/dashboard'

    window.localStorage.setItem('sessionToken', response.token)
  } catch (error) {
    console.error(error)
  }
})
