//arquivo responsavel por impotar as bibliotecas baixadas com o NPM e declarar a rota principal

const express = require('express')
const app = express() 
const cors = require('cors') // Boa pratica sempre baixar 

require('dotenv-safe').config(); 

const db = require('./config/database')
const userRoutes = require('./routes/userRoutes') 

db.connect() 

app.use(cors())
app.use(express.json())
app.use("/users", userRoutes) // Rota principal 

module.exports = app // deixando o arquivo disponivel para ser utilizado em outros