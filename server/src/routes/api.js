const { Router } = require("express")

const userRouter = require("./user/user.router")

const api = Router()

api.use("/user", userRouter)


module.exports = api