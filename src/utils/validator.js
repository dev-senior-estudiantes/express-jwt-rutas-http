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

  if (typeof name === 'undefined') {
    const message = 'name is required'
    errors.name = new ValidationError(message)
    messages.push(message)
  }

  if (typeof email === 'undefined') {
    const message = 'email is required'
    errors.name = new ValidationError(message)
    messages.push(message)
  }

  if (typeof password === 'undefined') {
    const message = 'password is required'
    errors.name = new ValidationError(message)
    messages.push(message)
  }

  if (messages.length > 0) {
    const finalMessage = messages.join(', ')
    const error = new ValidationError(finalMessage)
    error.errors = errors
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
