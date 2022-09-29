const UserSchema = require('../models/userSchema') // utiliza o padrao criado em models
const bcrypt = require('bcrypt') // importa o bcrypt baixado no npm 
const jwt = require('jsonwebtoken') // token de acesso

const SECRET = process.env.SECRET // declarado no env 

const login = (req, res) => {
    try {
        UserSchema.findOne({ email: req.body.email }, (error, user) => { 
            if(!user) {
                return res.status(401).send({
                    message: "User não encontrado",
                    email: `${req.body.email}`
                })
            } // busca o usuario pelo email

            const validPassword = bcrypt.compareSync(req.body.password, user.password) // valida a senha 

            if(!validPassword) {
                return res.status(401).send({
                    message: "Login não autorizado"
                })
            }

            const token = jwt.sign({ name: user.name }, SECRET) // token = chave publica para liberar acesso

            res.status(200).send({
                message: "Login autorizado",
                token
            })
        })
    } catch(e) {
        console.error(e)
    } // mostra erro no terminal 
}

module.exports = {
    login
}