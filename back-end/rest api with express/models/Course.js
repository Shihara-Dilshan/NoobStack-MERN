const mongoose = require('mongoose');

const ContentSchema = mongoose.Schema({
    videoUrl: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
});

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
    },
    content: {
        type: [ContentSchema],
        required: false

    }
});

module.exports = mongoose.model('Courses', CourseSchema);
