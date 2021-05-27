const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number,
    review: String
})

mongoose.model("User", UserSchema)
