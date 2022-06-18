const { Router } = require("express");
const passport = require("passport");

const CLIENT_URL = "http://localhost:3000";

const router = Router();

router.route("/signup").post();
router.route("/login").post();
router.route("/register-dogsitter").post();
router.route("/").get();

//Google login routes
router.get("/google-login/success", function (req, res) {
  if (req.user) {
    res.status(200).json({
      success: true,
      msg: "Google login successful",
      user: req.user,
    });
  }
});
router.route("/google-login/failed").get(function (req, res) {
  res.status(401).json({ success: false, msg: "Google login failed!" });
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
