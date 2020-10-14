const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    fname: {
        type: String,
        required: true,
        min: 4
    },
    lname: {
        type: String,
        required: true,
        min: 4
    },
    email: {
        type: String,
        required: true,
        max: 255,
        min: 6,
    }, 
    password: {
        type: String,
        required: true,
        max: 1024,
        min: 8
    },
    imageUrl: {
    	type: String,
        required: true,
        default: "https://cdn3.vectorstock.com/i/1000x1000/50/07/http-404-not-found-error-message-hypertext-vector-20025007.jpg",
        max: 1024,
        min: 8
    }
});

module.exports = mongoose.model('Users', UserSchema);
