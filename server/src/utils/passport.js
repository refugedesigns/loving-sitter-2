const GoogleStrategy = require("passport-google-oauth20").Strategy;
const passport = require("passport");
const User = require("../models/user.model");

passport.use(
  new GoogleStrategy(
    {
      clientID: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SCECRET,
      callbackURL: "/api/v1/user/auth/google/callback",
    },
    async function (accessToken, refreshToken, profile, done) {
      const existingUser = await User.find({ googleId: profile.id });

      if (existingUser.length === 0) {
        console.log(profile);
        const newUser = {
          fullName: profile.displayName,
          googleId: profile.id,
          email: profile.emails[0].value,
          profilePhoto: profile.photos[0].value,
          isThirdParty: true,
        };
        const user = await User.create(newUser);
        return done(null, user);
      } else {
        console.log(existingUser)
        done(null, existingUser[0]);
      }
    }
  )
);

passport.serializeUser((user, done) => {
  done(null, user);
});

passport.deserializeUser((user, done) => {
  done(null, user);
});
