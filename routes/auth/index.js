const router = require("express").Router();

const registerController = require("../../controllers/auth/register-controller");
const loginController = require("../../controllers/auth/login-controller");
const logoutController = require("../../controllers/auth/logout-controller");

router.post("/register", registerController);

router.post("/login", loginController);

router.post("/logout", logoutController);

module.exports = router;
