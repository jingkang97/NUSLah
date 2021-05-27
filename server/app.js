const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

require('./reviews')

const User = mongoose.model("User")


const mongoURI = "mongodb+srv://ngjk97:jmunfSrrq0MhcbC4@cluster0.m6m4z.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

mongoose.connect(mongoURI,{
    useNewUrlParser:true,
    useUnifiedTopology: true
})

mongoose.connection.on("connected",()=>{
    console.log("connected to mongo")
})

mongoose.connection.on("error",(err)=>{
    console.log("error", err)
})

app.get('/', (req,res)=>{
    res.send("welcome to node js")
})


app.listen(3000, ()=>{
    console.log("server running")
})