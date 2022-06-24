require("./utils/passport");
require("express-async-handler");
require("dotenv").config()
const path = require("path");
const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const cookieSession = require("cookie-session")
const helmet = require("helmet");
const passport = require("passport");

const { notFound, errorHandler } = require("./middlewares/error");
const api = require("./routes/api");

const app = express();

app.use(helmet());
app.use(cookieParser());
app.use(
  cookieSession({
    name: "session",
    keys: ["eras"],
    maxAge: 24 * 60 * 60 * 1000,
  })
);

app.use(passport.initialize());
app.use(passport.session());

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
// if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "..", "public")));

  app.get("/*", (req, res) => {
    res.sendFile(path.join(__dirname, "..", "public", "index.html"));
  });
// } else {
  // app.get("/", (_, res) => {
//     res.send("API is running");
//   });
// }


app.use("/api/v1", api);


app.use(notFound)
app.use(errorHandler)

module.exports = app;
