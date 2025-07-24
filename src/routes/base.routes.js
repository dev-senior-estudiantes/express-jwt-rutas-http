const express = require('express')

const router = express.Router()
const authMiddleware = require('../middleware/authMiddleware')
const PathController = require('../controllers/path.controller')

router.get('/', PathController.homePage)

router.get('/dashboard', authMiddleware, PathController.homePage)

router.get('/login', PathController.loginPage)

router.get('/register', PathController.registerPage)

router.get('/logout', PathController.logoutPage)

router.use(PathController.notFoundPage)

module.exports = router
