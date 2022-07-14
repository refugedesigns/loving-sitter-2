const { check, validationResult } = require("express-validator")

const validateLocalRegister = [
  check("fullName", "Please enter your name.").not().isEmpty().isAlpha(),
  check("email", "Please enter a valid email address.").isEmail(),
  check(
    "password",
    "Please enter a password with 6 or more characters."
  ).isLength({ min: 6 }),
  (req, res, next) => {
    const errors = validationResult(req)

    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() })
    }
    next()
  },
]

const validateLocalLogin = [
  check("email", "Please enter a valid email address.").isEmail(),
  check(
    "password",
    "Please enter a password with 6 or more characters."
  ).isLength({ min: 6 }),
  (req, res, next) => {
    const errors = validationResult(req)

    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() })
    }
    next()
  },
]

const validateBooking = [
  check("startDate", "Please provide a start date.").not().isEmpty().isDate(),
  check("endDate", "Please provide and end date.").notEmpty().isDate(),
  check("startTime", "Please provide a start time.").notEmpty().isString(),
  check("endTime", "Please provide an end time.").notEmpty().isString(),
  check("recipient", "Please provide the recipient id."),
  (req, res, next) => {
    const errors = validationResult(req)

    if (!errors.isEmpty) {
      return res.status(422).json({ errors: errors.array() })
    }
    next()
  },
]

module.exports = {
  validateLocalLogin,
  validateLocalRegister,
  validateBooking
}
