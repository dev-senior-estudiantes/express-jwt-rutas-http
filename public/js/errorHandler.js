/*
  formError
  error: {
    name: String,
    email: String,
    password: String
  }
*/

const $ = el => document.querySelector(el)

const name = $('#errorName')
const email = $('#errorEmail')
const password = $('#errorPass')

export const formErrors = (errors) => {
  if (errors.name) {
    name.innerHTML = errors.name
    name.classList.add('erroInfo')
  }

  if (errors.email) {
    email.innerHTML = errors.email
    email.classList.add('erroInfo')
  }

  if (errors.password) {
    password.innerHTML = errors.password
    password.classList.add('erroInfo')
  }
}

export const loginErrors = (errors) => {
  formErrors(errors)

  if (typeof errors === 'string') {
    const errorDialog = $('.errorDialog')
    const acceptError = $('.acceptError')
    errorDialog.showModal()
    acceptError.onclick = () => { errorDialog.close() }
  }
}

export const clearErrors = () => {
  if (name) {
    name.innerHTML = ''
    name.classList.remove('erroInfo')
  }
  if (email) {
    email.innerHTML = ''
    email.classList.remove('erroInfo')
  }
  if (password) {
    password.innerHTML = ''
    password.classList.remove('erroInfo')
  }
}
