import * as errorHandler from './errorHandler.js'

const $ = el => document.querySelector(el)

const form = $('#registerForm')

form.addEventListener('submit', async (e) => {
  errorHandler.clearErrors()
  e.preventDefault()

  const name = $('#name').value
  const email = $('#email').value
  const password = $('#pass').value

  const user = {
    name,
    email,
    password
  }

  const response = await fetch('/register', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
  }).then(result => result.json())

  if (response.error) {
    errorHandler.formErrors(response.error)
    return
  }

  window.localStorage.setItem('sessionToken', response.token)
  window.location.href = '/dashboard'
})
