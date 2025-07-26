const path = require('path')

const publicPath = '../../public/'
class PathController {
  static registerPage (req, res) {
    res.sendFile(path.join(__dirname, publicPath, 'register.html'))
  }

  static loginPage (req, res) {
    res.sendFile(path.join(__dirname, publicPath, 'login.html'))
  }

  static logoutPage (req, res) {
    res.sendFile(path.join(__dirname, publicPath, 'salir.html'))
  }

  static notFoundPage (req, res) {
    res.status(404).sendFile(path.join(__dirname, publicPath, '404.html'))
  }

  static homePage (req, res) {
    res.sendFile(path.join(__dirname, publicPath, 'dashboard.html'))
  }
}

module.exports = PathController
