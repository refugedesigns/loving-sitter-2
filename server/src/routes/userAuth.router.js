const { Router } = require("express")
const passport = require("passport")

const { signinUser } = require("../controllers/user/user.controller")
const { validateLocalLogin, validateLocalRegister } = require("../utils/validate")
const CLIENT_URL = "http://localhost:3000"

const router = Router()

//Passport local
router.post("/signup", validateLocalRegister, passport.authenticate("local-signup"), (req, res) => {
  if (req.user) {
    res.status(200).json({
      success: true,
      msg: "login successful",
      user: req.user,
    })
  } else {
    res.status(422).json({
      success: false,
      msg: "session expired please login in again",
      user: {},
    })
  }
})
router.post("/login", validateLocalLogin, passport.authenticate("local-login"), signinUser)
router.route("/register-dogsitter").post()
router.route("/").get()

//Google login routes
router.get("/login/success", function (req, res) {
  console.log(req.user)
  if (req.user) {
    res.status(200).json({
      success: true,
      msg: "User session still active.",
      user: {
        _id: req.user._id,
        fullName: req.user.fullName,
        profilePhoto: req.user.profilePhoto,
        price: req.user.price,
        phoneNumber: req.user.phoneNumber,
        payments: req.user.payments,
        isThirdParty: req.user.isThirdParty,
        isDogsitter: req.user.isDogsitter,
        isAvailable: req.user.isAvailable,
        imageGalley: req.user.imageGallery,
        googleId: req.user.googleId,
        email: req.user.email,
        city: req.user.city,
        availableDays: req.user.availableDays,
        address: req.user.address,
        about: req.user.about,
      },
    })
  }
})
router.get("/login/failed", function (req, res) {
  res.status(401).json({ success: false, msg: "login failed!" })
})
router.get(
  "/google-login",
  passport.authenticate("google", { scope: ["profile", "email"] })
)
router.get(
  "/google/callback",
  passport.authenticate("google", {
    successRedirect: `${CLIENT_URL}/dogsitter-listings`,
    failureRedirect: "/google-login/failed",
  })
)
router.route("/logout").get(function (req, res) {
  req.logout()
  res.redirect(`${CLIENT_URL}/login`)
})

module.exports = router
