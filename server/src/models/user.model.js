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
    price: Number,
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

UserSchema.methods.findOrCreate = async function (profile) {
    try {
    const user = await mongoose.model("User").find({googleId: profile.googleId})
    if(!user) {
        //add user to database
        const newUser = {
            fullName: profile.displayName,
            googleId: profile.id,
            email: profile.emails[0].value,
            profilePhoto: profile.photos[0].value,
            isThirdParty: true
        }
        const createdUser = await mongoose.model("User").create(newUser)
        return createdUser
    }
    return user
    } catch (error) {
        return {
            msg: "Something went wrong",
            success: false,
            code: 500
        }
    }
   
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