const User = require("../../models/user.model")

const registerUser = async(req, res, next) => {
    res.send("Signup route")
}

const signinUser = async (req, res) => {
  if (req.user) {
    return res.status(200).json({
      success: true,
      msg: "Login successful",
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
  return res.status(401).json({
    success: false,
    msg: "Login failed.",
  })
}



module.exports = {
    registerUser,
    signinUser,
}