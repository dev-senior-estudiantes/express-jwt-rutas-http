// Mail must to be unique
/*
{
  name: String,
  email: String,
  password: String
}
*/

function validator ({ name, email, password }) {
  const errors = {}
  const messages = []

  if (typeof name === 'undefined' || name.length === 0) {
    const message = 'name is required'
    errors.name = new ValidationError(message)
    messages.push(message)
  }

  if (typeof email === 'undefined' || email.length === 0) {
    const message = 'email is required'
    errors.email = new ValidationError(message)
    messages.push(message)
  }

  if (typeof password === 'undefined' || password.length === 0) {
    const message = 'password is required'
    errors.password = new ValidationError(message)
    messages.push(message)
  }

  if (name && email && password) {
    if (name.length < 3 || name.length > 20) {
      const message = 'name must be 3-20 characters'
      errors.name = new ValidationError(message)
      messages.push(message)
    }

    if (!(/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/.test(email))) {
      const message = 'invalid email'
      errors.email = new ValidationError(message)
      messages.push(message)
    }

    if (password.length < 3 || password.length > 20) {
      const message = 'password must be 3-20 characters'
      errors.password = new ValidationError(message)
      messages.push(message)
    }
  }

  if (messages.length > 0) {
    const finalMessage = messages.join(', ')
    const error = new ValidationError(finalMessage)
    error.errors = errors
    // console.log(errors)
    throw error
  }

  return { name, email, password }
}

function validatorPartial ({ name, email, password }) {
  const validData = { name, email, password }

  if (typeof name === 'undefined') {
    delete validData.name
  }

  if (typeof email === 'undefined') {
    delete validData.email
  }

  if (typeof password === 'undefined') {
    delete validData.password
  }

  return validData
}

class ValidationError {
  constructor (message) {
    const error = new Error(message)
    error.name = 'ValidationError'
    return error
  }
}

module.exports = {
  validator,
  validatorPartial
}
