const { Router } = require("express");
const passport = require("passport");

const CLIENT_URL = "http://localhost:3000";

const router = Router();

//Passport local
router.post("/signup", passport.authenticate('local-signup'), (req, res) => {
  res.status(201).json(req.user)
});
router.post("/login", passport.authenticate("local-login"), (req, res) => {
  res.status(200).json(req.user)
});
router.route("/register-dogsitter").post();
router.route("/").get();

//Google login routes
router.get("/login/success", function (req, res) {
  if (req.user) {
    res.status(200).json({
      success: true,
      msg: "login successful",
      user: req.user,
    });
  }
});
router.get("/login/failed", function (req, res) {
  res.status(401).json({ success: false, msg: "login failed!" });
});
router.get(
  "/google-login",
  passport.authenticate("google", { scope: ["profile", "email"] })
);
router.get("/google/callback", passport.authenticate("google", {
    successRedirect: `${CLIENT_URL}/dogsitter-listings`,
    failureRedirect: "/google-login/failed",
  }))
router.route("/logout").get(function (req, res) {
  req.logout();
  res.redirect(`${CLIENT_URL}/login`);
});

module.exports = router;
