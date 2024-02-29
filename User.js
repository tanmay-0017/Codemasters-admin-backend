const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    verified: {
        type: Boolean
    }
}) 

module.exports = mongoose.model("user" , userSchema);