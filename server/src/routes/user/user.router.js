const { Router } = require("express");

const router = Router();


router.route("/signup").post()
router.route("/login").post()
router.route("/register-dogsitter").post()
router.route("/").get()

module.exports = router