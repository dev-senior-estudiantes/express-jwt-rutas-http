const bcrypt = require('bcrypt')

const Model = require('../model/users.model')

class UserController {
  static async getAll (req, res) {
    const users = await Model.getAll()
    res.json(users)
  }

  static async createUser (req, res) {
    const input = UserController.validator(req.body)

    const hashedPassword = await bcrypt.hash(input.password, 10)

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
    const input = UserController.validatorPartial(req.body)
    const id = req.params.id

    if (input.password) {
      input.password = bcrypt.hash(input.password, 10)
    }

    const updatedUser = await Model.getByIdAndUpdate(id, input)

    if (!updatedUser) {
      return res.status(404).json({ error: 'user does not found' })
    }

    res.json(updatedUser)
  }

  static validator ({ name, email, password }) {
    return { name, email, password }
  }

  static validatorPartial ({ name, email, password }) {
    return { name, email, password }
  }
}

module.exports = UserController
