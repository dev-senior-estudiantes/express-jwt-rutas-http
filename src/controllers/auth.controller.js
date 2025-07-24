const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const config = require('../utils/config')
const Validator = require('../utils/validator')
const Model = require('../model/users.model')

class AuthController {
  static async register (req, res) {
    const input = Validator.validator(req.body)

    const foundUser = await Model.getByEmail(input.email)

    if (foundUser) {
      return res.status(400).json({ error: 'email already taken' })
    }

    const saltRounds = config.SALT_ROUNDS | 10
    const hashedPassword = await bcrypt.hash(input.password, saltRounds)

    const user = {
      ...input,
      password: hashedPassword,
      date: new Date()
    }
    const savedUser = await Model.create(user)

    const token = jwt.sign({ id: savedUser.id }, config.JWT_SECRET, { expiresIn: '1h' })

    const response = {
      token,
      user: savedUser
    }

    res.status(201).json(response)
  }

  static async login (req, res) {
    const input = Validator.validatorPartial(req.body)
    const user = await Model.getByEmail(input.email)

    if (!user) {
      return res.status(401).json({ error: 'invalid credentials' })
    }

    const access = await bcrypt.compare(input.password, user.password)

    if (!access) {
      return res.status(401).json({ error: 'invalid credentials' })
    }

    const token = jwt.sign({ id: user.id }, config.JWT_SECRET, { expiresIn: '1h' })

    const response = {
      token,
      user
    }

    res.json(response)
  }
}

module.exports = AuthController
