const User = require("../../models/user.model")

const getAllDogsitters = async (req, res) => {
  const dogsitters = await User.find({ isDogsitter: true }).select("-password")
  const transformedDogsitters = dogsitters.map((dogsitter) => {
    return {
      id: dogsitter._id,
      fullName: dogsitter.fullName,
      email: dogsitter.email,
      isDogsitter: dogsitter.isDogsitter,
      city: dogsitter.city,
      address: dogsitter.address,
      phoneNumber: dogsitter.phoneNumber,
      profilePhoto: dogsitter.profilePhoto,
      about: dogsitter.about,
      payments: dogsitter.payments,
      isThirdParty: dogsitter.isThirdParty,
      isAvailable: dogsitter.isAvailable,
      availabilityDays: dogsitter.availabilityDays,
      price: dogsitter.price,
      imageGallery: dogsitter.imageGallery,
      petSittingCategory: dogsitter.petSittingCategory,
    }
  })
  return res.status(200).json(transformedDogsitters)
}

module.exports = {
  getAllDogsitters,
}
