const { Router } = require("express")

const { getAllDogsitters } = require("../controllers/dogsitter/dogsitter.controller")

const router = Router()

router.get("/", getAllDogsitters)


module.exports = router