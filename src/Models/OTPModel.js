

const mongoose = require('mongoose');

const UserData = new mongoose.Schema({
    email: {
        type: String
    },
    otp: {
        type: String
    },
    status: {
        type: Number
    }
}, {versionKey: false});

const OTPModel = mongoose.model("OTP", UserData);

module.exports = OTPModel;