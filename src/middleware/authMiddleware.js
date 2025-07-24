const jwt = require('jsonwebtoken')

const config = require('../utils/config')

const authMiddleware = async (req, res, next) => {
  const authHeaders = req.headers.authorization

  let token = null
  if (authHeaders && authHeaders.startsWith('Bearer ')) {
    token = authHeaders.split(' ')[1]
  }

  if (!token) {
    return res.status(401).json({ error: 'No token provided' })
  }

  try {
    const payLoad = jwt.verify(token, config.JWT_SECRET)
    req.user = payLoad
    next()
  } catch (error) {
    res.status(401).json({ error: 'Invalid token' })
  }
}

module.exports = authMiddleware
