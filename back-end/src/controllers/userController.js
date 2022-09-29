const UserSchema = require("../models/userSchema") // utiliza o padrao criado em models
const bcrypt = require("bcrypt") // para crypt a senha 
const jwt = require("jsonwebtoken") // token de acesso 

const SECRET = process.env.SECRET // declarado no env 

// Criar C

const createUser = async (req, res) => {

    console.log("SENHA ANTES DO BCRYPT", req.body.password)
    const hashedPassword = bcrypt.hashSync(req.body.password, 10)
    // bcrypt.hashSync(valor a ser hasherizado, salt)
    req.body.password = hashedPassword;

    console.log("SENHA DEPOIS DO BCRYPT", req.body.password)

  try {
    // acessar informações do body da requisição
    const newUser = new UserSchema(req.body) 
    console.log("NOVO USUÁRIO CRIADO", newUser) // cria o usuario

    const savedUser = await newUser.save()
    console.log("NOVO USUÁRIO SALVO NO BANCO", savedUser) // salva o usuario 

    res.status(201).send({
      message: "Novo usuário criado com sucesso",
      savedUser
    })
  } catch(e) {
    console.error(e) // exibe o erro 
  }
}


// Listar usuarios R

const getAll = async (req, res) => {
  UserSchema.find(function (err, users) {
    if(err) {
      res.status(500).send({ message: err.message })
    }
      res.status(200).send(users)
  }) 
}

//Listar Usuario Por ID
const getById = async (req, res) => {
  try {
    const findUser = await UserSchema.findById(req.params.id) // busca o usuario pelo ID

    if (findUser) {            
        findUser.name = req.body.name || findUser.name
        findUser.email = req.body.email || findUser.email
    } // busca name ou email do usuario do id selecionado 

    res.status(200).json({
        message: `Usuário do ID:'${findUser.id}'.`,
        findUser // exibe o usuario.
    })

} catch (error) {
   console.error(error)
 }
}

// Atualizar U

const updateUserById = async (req, res) => {
  try {
      const findUser = await UserSchema.findById(req.params.id) // busca o usuario pelo ID

      if (findUser) {            
          findUser.name = req.body.name || findUser.name 
          findUser.email = req.body.email || findUser.email
      } // busca name ou email do usuario do id selecionado 

      const savedUser = await findUser.save() // salva as alteraçoes 

      res.status(200).json({
          message: "Usuário atualizada com sucesso!",
          savedUser // salva
      })

  } catch (error) {
     console.error(error) // exibe o erro 
   }
}

// Delete D

const deleteUserById = async (req, res) => {
  try {
      const userFound = await UserSchema.findById(req.params.id) // busca o usuario pelo ID

     await userFound.delete() // faz o delete

     res.status(200).json({
         mensagem: `Usuário '${userFound.name}' deletada com sucesso!` // mensagem caso de certo
     })

  } catch (err) {
      res.status(400).json({
          mensagem: err.message 
      })
      console.log(err) // exibe o erro 
  }
} 


module.exports = {
  getAll,
  createUser,
  updateUserById,
  deleteUserById,
  getById,
} // exporta 
