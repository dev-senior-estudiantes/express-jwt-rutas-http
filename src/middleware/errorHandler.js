const logger = require('../utils/logger')

const errorHandler = (err, req, res, next) => {
  logger.error(err)

  if (err.name === 'ValidationError') {
    const errors = {}
    Object.keys(err.errors).forEach(field => {
      errors[field] = err.errors[field].message
    })
    return res.status(400).json({ error: errors })
  }

  next(err)
}

module.exports = errorHandler
