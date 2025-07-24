const express = require('express')

const router = express.Router()
const UsersController = require('../controllers/users.controller')

router.get('/', UsersController.getAll)

router.post('/', UsersController.createUser)

router.delete('/:id', UsersController.deleteUser)

router.put('/:id', UsersController.updateUser)

module.exports = router
