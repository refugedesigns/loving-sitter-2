const User = require("../../models/user.model")

const registerUser = asyncHandler(async(req, res, next) => {
    res.send("Signup route")
})



module.exports = {
    registerUser,
}