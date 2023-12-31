const express = require("express")
const userController = require("../controllers/usersController")
const router = express.Router()

router
  .route("/")
  .get(userController.getAllUsers)
  .post(userController.createUser)

router
  .route("/:id")
  .get(userController.getUserById)
  .patch(userController.editUser)
  .delete(userController.removeUser)

module.exports = router
