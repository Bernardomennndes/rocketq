const express = require("express")
const questionControler = require('./controllers/questionController')
const roomController = require('./controllers/roomControler') 

const route = express.Router()

route.get('/', (req, res) => res.render("index", {page: 'enterRoom'}))
route.get('/create-room', (req, res) => res.render("index", {page: 'createRoom'}))

route.post('/create-room', roomController.create)
route.get('/room/:room', roomController.open)
route.post('/enterroom', roomController.enter)

route.post('/question/create/:room', questionControler.create)
route.post('/question/:room/:question/:action', questionControler.index)

module.exports = route








