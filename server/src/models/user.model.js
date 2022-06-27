const { Schema, model, default: mongoose } = require("mongoose");
const bcrypt = require("bcrypt")

const UserSchema = new Schema({
    fullName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
    },
    isDogsitter: {
        type: Boolean,
        default: false
    },
    city: String,
    address: String,
    phoneNumber: String,
    profilePhoto: String,
    about: String,
    payments: Array,
    isThirdParty: {
        type: Boolean,
        default: false,
    },
    googleId: {
        type: String,
        default: null
    },
    isAvailable: {
        type: Boolean,
        default: false
    },
    availabilityDays: Array,
    price: {
        type: Number,
        default: 0
    },
    imageGallery: [
        {
            type: Schema.Types.ObjectId,
            ref: "Image"
        }
    ],
})

UserSchema.methods.matchPassword = async function(enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password)
}


UserSchema.pre("save", async function (next) {
    if(!this.isModified("password")) {
        next()
    }
    const salt = await bcrypt.genSalt(10)
    this.password = await bcrypt.hash(this.password, salt)
})

const User = model("User", UserSchema)

module.exports = User