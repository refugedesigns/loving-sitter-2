const Booking = require('../models/booking.model')

const allSentBookingRequests = (req, res) => {
    if(req.user) {
        console.log(req.user)
        const bookings = await Booking.find({sender: req.user._id})
        res.status(200).json(bookings)
    }
}