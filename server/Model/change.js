var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var ChangeSchema = new Schema({
    userId: {
        type: String,
        required: true,
        unique: true
    },
    username: {
        type: String,
        required: true,
    },
    change: {
        type: [],
        required: true
    },
})

module.exports = mongoose.model("change", ChangeSchema);