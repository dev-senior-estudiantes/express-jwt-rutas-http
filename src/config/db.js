const { default: mongoose } = require("mongoose");

const uri = `mongodb+srv://api-jwt:${process.env.PASSWORD}@cluster0.oyvkija.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
const option = { useNewUrlParser: true, useUnifiedTopology: true }
mongoose.connect(uri, option)

.then(() => console.log('Base de datos conectada'))
.catch(e => console.log('error db:', e))

module.exports = mongoose.connect;