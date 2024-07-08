const express = require('express');
const router = express.Router();
const userController = require("../controller/userController");


router.post("/", userController.createUser);

router.get("/", userController.getAllUsers);

router.get("/:id", userController.getUserById);

router.patch("/:id", userController.updateUserById);


module.exports = router;