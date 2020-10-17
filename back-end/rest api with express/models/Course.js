const mongoose = require('mongoose');

const CourseSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
        min: 2
    },
    discription: {
        type: String,
        required: true,
        min: 4
    },
    price: {
        type: Number,
        required: true,
    }, 
    imageUrl: {
    	type: String,
        required: true,
        max: 1024,
        min: 8
    }
});

module.exports = mongoose.model('Courses', CourseSchema);
