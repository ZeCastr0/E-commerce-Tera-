const express = require("express")
const router = express.Router()

const controller = require("../controllers/userController")

const authController = require("../controllers/authController")

router.get("/all", controller.getAll); 
router.get("/user/:id", controller.getById);
router.post("/create", controller.createUser);
router.patch("/update/:id", controller.updateUserById);
router.delete("/delete/:id", controller.deleteUserById);

router.post('/login', authController.login)


module.exports = router
