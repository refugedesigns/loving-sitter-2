const { Router } = require("express")

const userAuthRouter = require("./user/userAuth.router")
const userInfoRouter = require("./user/userInfo.router")
const dogsitterRouter = require("./dogsitter/dogsitter.router")

const api = Router()

api.use("/user", userInfoRouter)
api.use("/user/auth", userAuthRouter)
api.use("/dogsitters", dogsitterRouter)

module.exports = api
