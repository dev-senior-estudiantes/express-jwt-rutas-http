const express = require('express')

const router = express.Router()
const PathController = require('../controllers/path.controller')

router.get('/', PathController.homePage)

router.get('/dashboard', PathController.homePage)

router.get('/login', PathController.loginPage)

router.get('/register', PathController.registerPage)

router.get('/logout', PathController.logoutPage)

router.use(PathController.notFoundPage)

module.exports = router
