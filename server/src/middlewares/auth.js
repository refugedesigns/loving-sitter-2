const jwt = require("jsonwebtoken")

module.exports = (req, res, next) => {
    const token = req.cookies.token 
    console.log(token)
    if(!token || !req.cookies.session) {
        return res.status(401).send("No token, authorization failed!")
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        req.user.id = decoded 

        next()
    } catch (error) {
        res.status(401).send("Token not valid.")
    }
}