const express = require('express')

const OngController = require('./controllers/OngController')
const IncidentController = require('./controllers/IncidentController')
const ProfileController = require('./controllers/ProfileController')
const SessionController = require('./controllers/SessionController')

//Variavel para armazenar todas as rotas
const routes = express.Router()

//Metodos Login
routes.post('/sessions', SessionController.create)

//Metodos Ongs
routes.get('/ongs', OngController.index)
routes.post('/ongs', OngController.create)
routes.get('/profile', ProfileController.index)

//Metodos Casos
routes.get('/incidents', IncidentController.index)
routes.post('/incidents', IncidentController.create)
routes.delete('/incidents/:id', IncidentController.delete)

//Exportação da variavel
module.exports = routes