require('dotenv').config()

const PORT = process.env.PORT
const SALT_ROUNDS = process.env.SALT_ROUNDS
const JWT_SECRET = process.env.JWT_SECRET

module.exports = {
  PORT,
  SALT_ROUNDS,
  JWT_SECRET
}
