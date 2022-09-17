const UserSchema = require("../models/userSchema")
const bcrypt = require("bcrypt")

const getAll = async (req, res) => {
  UserSchema.find(function (err, users) {
    if(err) {
      res.status(500).send({ message: err.message })
    }
      res.status(200).send(users)
  }) 
}


const createUser = async (req, res) => {

  // bcrypt.hashSync(valor a ser hasherizado, salt)

    console.log("SENHA ANTES DO BCRYPT", req.body.password)
    const hashedPassword = bcrypt.hashSync(req.body.password, 10)
    req.body.password = hashedPassword;

    console.log("SENHA DEPOIS DO BCRYPT E REATRIUBUIÇÃO DE VALOR", req.body.password)

  try {
    // acessar informações do body da requisição
    const newUser = new UserSchema(req.body) 
    console.log("NOVO USUÁRIO CRIADO", newUser)

    const savedUser = await newUser.save()
    console.log("NOVO USUÁRIO SALVO NO BANCO", savedUser)

    res.status(201).send({
      message: "Novo usuário criado com sucesso",
      savedUser
    })
  } catch(e) {
    console.error(e)
  }
}


module.exports = {
  getAll,
  createUser
}
