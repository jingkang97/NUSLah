const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const ModuleSchema = new Schema({
    username: {type: String, required: true},
    title: {type: String, required: true},
    moduleCode: {type: String, required: true},
    moduleCredit: {type: Number, required: true},
    description: {type: String, required: true},
    sem1: {type: Boolean, required: true},
    sem2: {type: Boolean, required: true}

},{
    timestamps: true
});

const Module = mongoose.model('Module', ModuleSchema);

module.exports = Module;

