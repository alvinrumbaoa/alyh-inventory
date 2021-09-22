const Order = require("../models/order.model");

module.exports.getAllOrder = (req, res)  => {
    console.log("get all Order post");
    
    Order.find({ })
        .then((allOrder) =>{
                console.log(allOrder);
                res.json(allOrder);
        })
        .catch((err) => {
                console.log(err);
                res.json(err);
        })
    };

    module.exports.createOrder =(req, res) =>{
        console.log(require);
        Order.create(req.body)
            .then((newOrder) => { 
                    console.log(newOrder);
                    res.json(newOrder);
            })
            .catch((err) =>{
                console.log(err);
                res.json(err);
            })
    }

    module.exports.getOneOrder = (req, res) => {
        console.log("inside getOneOrder");
        console.log(req.params.id);
    
        Order.findById(req.params.id)
            .then((oneOrder) => {
                console.log(oneOrder);
                res.json(oneOrder);
            })
            .catch((err) => {
                console.log(err);
                res.json(err);
            })
    };


    module.exports.updateOrder = (req, res) => {
        console.log("inside updateOrder");
        console.log(req.params.id);  
        console.log(req.body);      
        Order.findByIdAndUpdate(req.params.id, req.body, {
            new: true,   
            runValidators: true  
        })
            .then((updatedOrder) => {
                console.log(updatedOrder);
                res.json(updatedOrder);
            })
            .catch((err) => {
                console.log(err);
                res.json(err);
            })
    };
    
    // delete Blog
    module.exports.deleteOrder = (req, res) => {
        console.log("inside deleteOrder");
        console.log(req.params.id);
    
        Order.findByIdAndDelete(req.params.id)
            .then((deletedOrder) => {
                // this is the deleted document....your last chance!!!
                console.log(deletedOrder);
                res.json(deletedOrder);
            })
            .catch((err) => {
                console.log(err);
                res.json(err);
            })
    };
    