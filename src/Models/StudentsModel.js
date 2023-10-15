

const mongoose = require('mongoose');

const UserData = new mongoose.Schema({
    email: {
        type: String
    },
    firstName: {
        type: String
    },
    lastName: {
        type: String
    },
    mobile: {
        type: String
    },
    password: {
        type: String
    },
    address: {
        type: String
    },
    roll: {
        type: String
    },
    class: {
        type: String
    }
}, {versionKey: false});

let StudentModel = mongoose.model("Students", UserData);

module.exports = StudentModel;