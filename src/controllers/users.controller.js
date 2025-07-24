const bcrypt = require('bcrypt')

const config = require('../utils/config')
const Validator = require('../utils/validator')
const Model = require('../model/users.model')

class UserController {
  static async getAll (req, res) {
    const users = await Model.getAll()
    res.json(users)
  }

  static async getUser (req, res) {
    const id = req.params.id

    const foundUser = await Model.getById(id)

    if (!foundUser) {
      return res.status(404).json({ error: 'user does not found' })
    }

    res.json(foundUser)
  }

  static async createUser (req, res) {
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

    res.status(201).json(savedUser)
  }

  static async deleteUser (req, res) {
    const id = req.params.id

    await Model.getByIdAndDelete(id)

    res.status(204).end()
  }

  static async updateUser (req, res) {
    const input = Validator.validatorPartial(req.body)
    const id = req.params.id

    if (input.password) {
      const saltRounds = config.SALT_ROUNDS | 10
      input.password = await bcrypt.hash(input.password, saltRounds)
    }

    const updatedUser = await Model.getByIdAndUpdate(id, input)

    if (!updatedUser) {
      return res.status(404).json({ error: 'user does not found' })
    }

    res.json(updatedUser)
  }
}

module.exports = UserController
