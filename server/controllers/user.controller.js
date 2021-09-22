const User = require("../models/user.model");

module.exports.getAllUser = (req, res)  => {
    console.log("get all User post");
    
    User.find({ })
        .then((allUser) =>{
                console.log(allUser);
                res.json(allUser);
        })
        .catch((err) => {
                console.log(err);
                res.json(err);
        })
    };

    module.exports.createUser =(req, res) =>{
        console.log(require);
        User.create(req.body)
            .then((newUser) => { 
                    console.log(newUser);
                    res.json(newUser);
            })
            .catch((err) =>{
                console.log(err);
                res.json(err);
            })
    }

    module.exports.getOneUser = (req, res) => {
        console.log("inside getOneUser");
        console.log(req.params.id);
    
        User.findById(req.params.id)
            .then((oneUser) => {
                console.log(oneUser);
                res.json(oneUser);
            })
            .catch((err) => {
                console.log(err);
                res.json(err);
            })
    };


    module.exports.updateUser = (req, res) => {
        console.log("inside updateUser");
        console.log(req.params.id);  
        console.log(req.body);      
        User.findByIdAndUpdate(req.params.id, req.body, {
            new: true,   
            runValidators: true  
        })
            .then((updatedUser) => {
                console.log(updatedUser);
                res.json(updatedUser);
            })
            .catch((err) => {
                console.log(err);
                res.json(err);
            })
    };
    
    // delete Blog
    module.exports.deleteUser = (req, res) => {
        console.log("inside deleteUser");
        console.log(req.params.id);
    
        User.findByIdAndDelete(req.params.id)
            .then((deletedUser) => {
                // this is the deleted document....your last chance!!!
                console.log(deletedUser);
                res.json(deletedUser);
            })
            .catch((err) => {
                console.log(err);
                res.json(err);
            })
    };
    