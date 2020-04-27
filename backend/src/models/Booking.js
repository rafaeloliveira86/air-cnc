const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
    date: String,
    approved: Boolean,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User' // Referência para a model User
    },
    spot: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Spot' // Referência para a model Spot
    }
});

module.exports = mongoose.model('Booking', BookingSchema);