const { Schema, model, default: mongoose } = require("mongoose")

const BookingSchema = new Schema(
  {
    startDate: {
      type: String,
      required: true,
    },
    startTime: {
      type: String,
      required: true,
    },
    endDate: {
      type: String,
      required: true,
    },
    endTime: {
      type: String,
      required: true,
    },
    sender: {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
    recipient: {
      type: mongoose.Types.ObjectId,
      ref: "User",
    },
    status: {
      type: String,
      enum: ["PENDING", "ACCEPTED", "CANCELLED"],
      default: "PENDING",
    },
  },
  { timestamps: true }
)

const Booking = model("Booking", BookingSchema)

module.exports = Booking
