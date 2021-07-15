const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const reviewSchema = new Schema({
    username: {type: String, required: true},
    professor:{type: Number, required: true},
    workload:{type: Number, required: true},
    difficulty:{type: Number, required: true},
    popularity:{type: Number, required: true},
    interactivity:{type: Number, required: true},
    keyAdvice: {type: String, required: true},
    grade: {type: String, required: true},
    details: {type: String, required: true},
    planning: {type: String, required: true},
    content: {type: String, required: true},
    homework: {type: String, required: true},
    assessment: {type: String, required: true},
},{
    timestamps: true
});

const Review = mongoose.model('Review', ReviewSchema);

module.exports = Review;

