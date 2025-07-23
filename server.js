const express = require('express')

const app = express()
const config = require('./src/utils/config')
const baseRouter = require('./src/routes/base.routes')
const requestLogger = require('./src/middleware/requestLogger')

app.use(express.static('./public'))
app.use(express.json())

app.use(requestLogger)

app.use('/', baseRouter)


app.listen(config.PORT, () => {
    console.log('Servidor corriendo en http://localhost:3000')
})