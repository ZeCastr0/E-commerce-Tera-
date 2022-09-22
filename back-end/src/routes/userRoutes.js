const express = require("express")
const router = express.Router()

const controller = require("../controllers/userController")

router.get("/all", controller.getAll); 
router.post("/create", controller.createUser);
router.patch("/update/:id", controller.updateUser);
router.delete("/delete/:id", controller.deleteUser);

module.exports = router
