const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

require('./reviews')

app.use(bodyParser.json())

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

// app.get('/', (req,res)=>{
//     res.send("welcome to node js")
// })

app.get('/',(req,res)=>{
    User.find().then(data=>{
        res.send(data)
    }).catch(err=>{
        console.log(err)
    })
})

app.post('/send-data', (req,res) => {
    const user = new User({
        name: req.body.name,
        email: req.body.email,
        age: req.body.age,
        review: req.body.review
    })
    user.save()
    .then(data=>{
        console.log(data)
        res.send("success")
    }).catch(err=>{
        console.log(err)
    })
})


app.post('/send', (req,res) => {
    console.log(req.body)
    res.send("posted")
})

app.post('/delete',(req, res) => {
    User.findByIdAndRemove(req.body.id)
    .then(data => {
        console.log(data)
        res.send('deleted')
    }).catch(err => {
        console.log(err)
    })
})

app.post('/update',(req, res)=>{
    User.findByIdAndUpdate(req.body.id,{
        name: req.body.name,
        email: req.body.email,
        age: req.body.age,
        review: req.body.review
    }).then(data=>{
        console.log(data)
        // res.send('updated')
        res.send(data)
    }).then(err=>{
        console.log(err)
    })
})


app.listen(3000, ()=>{
    console.log("server running")
})

