import * as errorHandler from './errorHandler.js'

const $ = el => document.querySelector(el)

const form = $('#loginForm')

form.addEventListener('submit', async (e) => {
  e.preventDefault()
  errorHandler.clearErrors()

  const email = $('#email').value
  const password = $('#pass').value

  const user = {
    email,
    password
  }

  const response = await fetch('/login', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
  }).then(result => result.json())

  if (response.error) {
    errorHandler.loginErrors(response.error)
    return
  }

  window.localStorage.setItem('sessionToken', response.token)
  window.location.href = '/dashboard'
})
