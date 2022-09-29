// Arquivo responsal por gerenciar as rotas 

const express = require("express") 
const router = express.Router() 

const controller = require("../controllers/userController") // indica onde esta o arquivo de controllers 

const authController = require("../controllers/authController") // indica onde esta o arquivo de controllers 

router.get("/all", controller.getAll); // rota para o controller para listar todos os usuraios 
router.get("/user/:id", controller.getById); // rota para o controller para listar  usuraios por id 
router.post("/create", controller.createUser); // rota para o controller para criar usuraios 
router.patch("/update/:id", controller.updateUserById); // rota para o controller para atualizar usuraios pelo id
router.delete("/delete/:id", controller.deleteUserById); // rota para o controller para deletar usuraios pelo ID 

router.post('/login', authController.login) // rota para o controller para fazer login 


module.exports = router // deixa o arquivo despinivel para ser usado
