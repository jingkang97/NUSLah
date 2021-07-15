const router = require('express').Router();
let Module = require('../models/module.model');


router.route('/').get((req,res) => {
    Module.find()
    .then(modules => res.json(modules))
    .catch(err => res.status(400).json('Error: '+ err))
    
});

router.route('/add').post((req,res) => {
    const username = req.body.username;
    const title = req.body.title;
    const moduleCode = req.body.moduleCode;
    const moduleCredit = Number(req.body.moduleCredit);
    const description = req.body.description;
    const sem1 = req.body.sem1
    const sem2 = req.body.sem2


    const newModule = new Module({
        username,
        title,
        moduleCode,
        moduleCredit,
        description,
        sem1,
        sem2
    })

    newModule.save()
        .then(() => res.json('Module added!'))
        .catch(err => res.status(400).json('Error: ' + err));
    
})


router.route('/:id').get((req, res)=>{
    Module.findById(req.params.id)
    .then(module => res.json(module))
    .catch(err => res.status(400).json('Error: ' + err));
})


router.route('/:id').delete((req, res)=>{
    Module.findByIdAndDelete(req.params.id)
    .then(()=> res.json('Module deleted'))
    .catch(err => res.status(400).json('Error: ' + err));
})


router.route('/update/:id').post((req, res)=>{
    Module.findById(req.params.id)
    .then(module => {
        module.username = req.body.username;
        module.title = req.body.title;
        module.moduleCode = req.body.moduleCode;
        module.moduleCredit = Number(req.body.moduleCredit);
        module.description = req.body.description;
        module.sem1 = Boolean(req.body.sem1);
        module.sem2 = Boolean(req.body.sem2);

        module.save()
        .then(() => res.json('Module updated!'))
        .catch(err => res.status(400).json('Error ' + err ));
    })
    .catch(err => res.status(400).json('Error: ' + err));
})




module.exports = router;