const { randomUUID } = require('node:crypto')
const path = require('path')

const manageJSON = require('../utils/manageJSON')
const dataPath = path.join(__dirname, '../db/users.json')

class User {
  static async getData () {
    return manageJSON.readContent(dataPath)
  }

  static async getAll () {
    const content = await this.getData()
    const finalUsers = content.map(user => this.prepare(user))
    return finalUsers
  }

  static async create (input) {
    const newUser = {
      id: randomUUID(),
      ...input
    }

    const users = await this.getAll()
    const usersActual = users.concat(newUser)
    await manageJSON.writeContent(dataPath, JSON.stringify(usersActual, '', 2))
    return this.prepare(newUser)
  }

  static async deleteAll () {
    return await manageJSON.writeContent(dataPath, '[]')
  }

  static async getById (id) {
    const data = await this.getData()
    const foundUser = data.find(user => user.id === id)
    if (!foundUser) {
      return false
    }

    return this.prepare(foundUser)
  }

  static async getByEmail (email) {
    const users = await this.getData()
    const foundUser = users.find(user => user.email === email)
    if (!foundUser) {
      return false
    }

    return this.prepare(foundUser)
  }

  static async getByIdAndUpdate (id, input) {
    const users = await this.getData()
    let foundUser

    const usersActual = users.map(user => {
      if (user.id === id) {
        const updatedUser = {
          ...user,
          ...input
        }
        foundUser = updatedUser
        return updatedUser
      }
      return user
    })

    if (!foundUser) {
      return false
    }

    await manageJSON.writeContent(dataPath, JSON.stringify(usersActual, '', 2))
    return this.prepare(foundUser)
  }

  static async getByIdAndDelete (id) {
    const users = await this.getData()

    const usersActual = users.filter(user => user.id !== id)
    await manageJSON.writeContent(dataPath, JSON.stringify(usersActual, '', 2))
    return null
  }

  static prepare (user) {
    user.toJSON = () => { return this.parse(user) }
    return user
  }

  static parse ({ id, name, email, date }) {
    return { id, name, email, date }
  }
}

module.exports = User
