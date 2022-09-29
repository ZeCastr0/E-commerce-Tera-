// Arquivo responsavel por ligar/configurar ao DB 

const mongoose = require('mongoose')

const MONGODB_URI = process.env.MONGODB_URI // endereço do DB declarado no env

const connect = async () => {
    try {
        await mongoose.connect(MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        })
        console.log("Banco conectado") // sucesso 
    } catch (error) {
        console.error("Erro: ", error.message) // mostra o erro no terminal 
    }
}

module.exports = {
    connect
} // exporta 