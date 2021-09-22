const Cart = require("../models/cart.model");

module.exports.getAllCart = (req, res)  => {
    console.log("get all Cart post");
    
    Cart.find({ })
        .then((allCart) =>{
                console.log(allCart);
                res.json(allCart);
        })
        .catch((err) => {
                console.log(err);
                res.json(err);
        })
    };

    module.exports.createCart =(req, res) =>{
        console.log(require);
        Cart.create(req.body)
            .then((newCart) => { 
                    console.log(newCart);
                    res.json(newCart);
            })
            .catch((err) =>{
                console.log(err);
                res.json(err);
            })
    }

    module.exports.getOneCart = (req, res) => {
        console.log("inside getOneCart");
        console.log(req.params.id);
    
        Cart.findById(req.params.id)
            .then((oneCart) => {
                console.log(oneCart);
                res.json(oneCart);
            })
            .catch((err) => {
                console.log(err);
                res.json(err);
            })
    };


    module.exports.updateCart = (req, res) => {
        console.log("inside updateCart");
        console.log(req.params.id);  
        console.log(req.body);      
        Cart.findByIdAndUpdate(req.params.id, req.body, {
            new: true,   
            runValidators: true  
        })
            .then((updatedCart) => {
                console.log(updatedCart);
                res.json(updatedCart);
            })
            .catch((err) => {
                console.log(err);
                res.json(err);
            })
    };
    
    // delete Blog
    module.exports.deleteCart = (req, res) => {
        console.log("inside deleteCart");
        console.log(req.params.id);
    
        Cart.findByIdAndDelete(req.params.id)
            .then((deletedCart) => {
                // this is the deleted document....your last chance!!!
                console.log(deletedCart);
                res.json(deletedCart);
            })
            .catch((err) => {
                console.log(err);
                res.json(err);
            })
    };
    