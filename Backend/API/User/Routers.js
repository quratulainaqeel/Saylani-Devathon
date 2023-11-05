const express = require('express')
const Router = express.Router()
const { Signup, Login, getAllUser} = require('./Controller')
 
Router.post('/signup', Signup)
Router.post('/login', Login)
Router.get('/get-all-user', getAllUser)


module.exports = Router