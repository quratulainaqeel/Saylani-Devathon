const express = require('express')
const app = express()
require('dotenv').config()
const { connect } = require('mongoose')

const port = process.env.SERVER_PORT || 1234

app.use(express.json())

app.use('/api', require('./API/User/Routers'))

app.get('/', (req, res) => {
    try {
        connect(process.env.MONGO_URI)
        console.log("DB CONNECTED")

    } catch (error) {
        console.error(error)
    }
  res.send('Hello World')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})