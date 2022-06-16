const { Schema, model } = require("mongoose");
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
        required: true,
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
        type:Boolean,
        default: false,
    },
    isAvailable: {
        type: Boolean,
        default: false
    },
    availabilityDays: Array,
    price: Number,
    imageGallery: [
        {
            type: Schema.Types.ObjectId,
            ref: "Image"
        }
    ],
})

UserSchema.methods.matchPassword = async function(this, enteredPassword) {
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

model.exports = User