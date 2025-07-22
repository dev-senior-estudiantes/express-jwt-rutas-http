const express = require('express')

const app = express()
const baseRouter = require('./src/routes/base.routes')

app.use(express.static('./public'))
app.use(express.json())

app.use('/', baseRouter)


app.listen(3000, () => {
    console.log('Servidor corriendo en http://localhost:3000')
})