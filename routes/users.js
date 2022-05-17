const express = require ("express");
const router = express.Router();
const mainController = require("../controllers/usersController")


router.get("/registrarse", mainController.register);

router.get("/login", mainController.login);

module.exports = router;