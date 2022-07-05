const GoogleStrategy = require("passport-google-oauth20").Strategy
const LocalStrategy = require("passport-local").Strategy
const passport = require("passport")
const User = require("../models/user.model")
const { createCustomError } = require("../utils/custom-error")

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
      callbackURL: "/api/v1/user/auth/google/callback",
    },
    async function (accessToken, refreshToken, profile, done) {
      const existingUser = await User.find({ googleId: profile.id })

      if (existingUser.length === 0) {
        console.log(profile)
        const newUser = {
          fullName: profile.displayName,
          googleId: profile.id,
          email: profile.emails[0].value,
          profilePhoto: profile.photos[0].value,
          isThirdParty: true,
        }
        const user = await User.create(newUser)
        return done(null, user)
      } else {
        console.log(existingUser)
        done(null, existingUser[0])
      }
    }
  )
)

passport.use(
  "local-signup",
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "password",
      passReqToCallback: true,
    },
    function (req, email, password, done) {
      const { fullName } = req.body
      process.nextTick(async () => {
        const user = await User.findOne({ email })
        if (user) return done(createCustomError("This user already exist", 400))
        const newUser = await User.create({
          fullName,
          email,
          password,
        })
        return done(null, newUser)
      })
    }
  )
)

passport.use(
  "local-login",
  new LocalStrategy(
    {
      usernameField: "email",
    },
    function (email, password, done) {
      process.nextTick(async () => {
        console.log(email, password)
        const user = await User.findOne({ email })
        if (!user)
          return done(
            createCustomError(
              "This user is not available, please sign up to continue",
              404
            )
          )
        const passwordMatch = await user.matchPassword(password)
        if (!passwordMatch)
          return done(createCustomError("email or password do not match", 422))
        return done(null, user)
      })
    }
  )
)

passport.serializeUser((user, done) => {
  done(null, user)
})

passport.deserializeUser((user, done) => {
  return done(null, user)
})
