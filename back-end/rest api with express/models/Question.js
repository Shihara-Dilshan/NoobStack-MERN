const mongoose = require('mongoose');


const CommentSchema = mongoose.Schema({
    auther: {
        type: String,
        required: true
    },
    autherUniqueId: {
        type: String,
        required: true
    },
    comment: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
});


const QuestionSchema = mongoose.Schema({
    auther: {
        type: String,
        required: true
    },
    autherUniqueId: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true,
        max: 1024
    },
    description: {
        type: String,
        required: true,
        max: 1024
    },
    image: {
        type: String,
        required: true,
        max: 1024
    },
    date: {
        type: Date,
        default: Date.now
    },
    views: {
        type: Number,
    },
    comments: {
        type: [CommentSchema],
        required: false

    }
});

module.exports = mongoose.model('Questions', QuestionSchema);
