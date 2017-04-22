var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var personalSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    IdNumber: {
        type: Number,
        required: true,
        unique: true
    },
    sex: {
        type: String,
        required: true
    },
    fatherName: {
        type: String,
        required: true
    },
    motherName: {
        type: String,
        required: true
    },
    dob: {
        type: Date,
        required: true
    },
    placeOfBirth: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    religion: {
        type: String,
        required: true
    },
    RegistrationNum: {
        type: Number,
        required: true
    },
    RegistrationPlace: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    cellPhone: {
        type: Number,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    personalImage: {
        type: String,
        required: true
    },
    idImage: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model("PersonalInformation", personalSchema);