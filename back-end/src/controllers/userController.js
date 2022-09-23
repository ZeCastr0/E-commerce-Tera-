const UserSchema = require("../models/userSchema")
const bcrypt = require("bcrypt")


// Criar C

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
    const findUser = await UserSchema.findById(req.params.id)

    if (findUser) {            
        findUser.name = req.body.name || findUser.name
        findUser.email = req.body.email || findUser.email
    }

    res.status(200).json({
        message: `Usuário do ID:'${findUser.id}'.`,
        findUser
    })

} catch (error) {
   console.error(error)
 }
}

// Atualizar U

const updateUserById = async (req, res) => {
  try {
      const findUser = await UserSchema.findById(req.params.id)

      if (findUser) {            
          findUser.name = req.body.name || findUser.name
          findUser.email = req.body.email || findUser.email
      }

      const savedUser = await findUser.save()

      res.status(200).json({
          message: "Usuário atualizada com sucesso!",
          savedUser
      })

  } catch (error) {
     console.error(error)
   }
}

// Delete D

const deleteUserById = async (req, res) => {
  try {
      const userFound = await UserSchema.findById(req.params.id)

     await userFound.delete()

     res.status(200).json({
         mensagem: `Usuário '${userFound.name}' deletada com sucesso!`
     })

  } catch (err) {
      res.status(400).json({
          mensagem: err.message
      })
      console.log(err)
  }
} 

module.exports = {
  getAll,
  createUser,
  updateUserById,
  deleteUserById,
  getById
}
