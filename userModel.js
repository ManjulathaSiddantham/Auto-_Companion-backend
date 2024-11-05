var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var userSchema = new Schema({

     CarName: {
        type: String,
        required: true
    },
    Colour: {
        type: String,
        required: true
    },
    Price: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('cars', userSchema);