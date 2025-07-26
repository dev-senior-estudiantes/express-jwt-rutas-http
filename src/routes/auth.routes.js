const express = require('express')

const router = express.Router()
const AuthController = require('../controllers/auth.controller')
const authMiddleware = require('../middleware/authMiddleware')

router.post('/login', AuthController.login)

router.post('/register', AuthController.register)

router.get('/api/verify', authMiddleware, AuthController.verify)

module.exports = router
