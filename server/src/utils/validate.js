const { check, validationResult } = require("express-validator")

export const validateLocalRegister = [
    check("name", "Please enter your name.").not().isEmpty().isAlpha(),
    check("email", "Please enter a valid email address.").isEmail(),
    check("password", "Please enter a password with 6 or more characters.").isLength({min: 6}),
    (req, res, next) => {
        const errors = validationResult(req)

        if(!errors.isEmpty()) {
            return res.status(422).json({errors: errors.array()})
        }
        next()
    }
]