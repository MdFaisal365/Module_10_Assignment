

const mongoose = require('mongoose');

const UserData = new mongoose.Schema({
    title: {
        type: String
    },
    classNote: {
        type: String
    },
    description: {
        type: String
    },
    status: {
        type: String
    },
    email: {
        type: String
    }
}, {versionKey: false});

let WorksModel = mongoose.model("Works", UserData);

module.exports = WorksModel;