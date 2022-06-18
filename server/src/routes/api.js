const { Router } = require("express")

const userAuthRouter = require("./user/userAuth.router")
const userInfoRouter = require("./user/userInfo.router")
const api = Router()

api.use("/user", userInfoRouter)
api.use("/user/auth", userAuthRouter)


module.exports = api