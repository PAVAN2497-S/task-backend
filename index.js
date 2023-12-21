const express = require('express')
const port = 5000
const app = express()
const cors = require('cors')
const configDB = require('./config/db')

configDB()

app.use(express.json())
app.use(cors())

const userCltr = require('./app/controller/userCltr')

app.post('/api/register', userCltr.form)

app.listen(port, () => {
    console.log('Server running on port', port)
})
