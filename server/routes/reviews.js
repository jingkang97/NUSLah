const router = require('express').Router();
let Review = require('../models/review.model');


router.route('/').get((req,res) => {
    Review.find()
    .then(users => res.json(reviews))
    .catch(err => res.status(400).json('Error: '+ err))
    
});

router.route('/add').post((req,res) => {
    const username = req.body.username;
    const newUser = new User({username});

    newUser.save()
        .then(() => res.json('User added!'))
        .catch(err => res.status(400).json('Error: ' + err));
    
})

module.exports = router;