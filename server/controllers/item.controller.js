const Item = require("../models/item.model");

module.exports.getAllItem = (req, res)  => {
    console.log("get all Item post");
    
    Item.find({ })
        .then((allItem) =>{
                console.log(allItem);
                res.json(allItem);
        })
        .catch((err) => {
                console.log(err);
                res.json(err);
        })
    };

    module.exports.createItem =(req, res) =>{
        console.log(require);
        Item.create(req.body)
            .then((newItem) => { 
                    console.log(newItem);
                    res.json(newItem);
            })
            .catch((err) =>{
                console.log(err);
                res.json(err);
            })
    }

    module.exports.getOneItem = (req, res) => {
        console.log("inside getOneItem");
        console.log(req.params.id);
    
        Item.findById(req.params.id)
            .then((oneItem) => {
                console.log(oneItem);
                res.json(oneItem);
            })
            .catch((err) => {
                console.log(err);
                res.json(err);
            })
    };


    module.exports.updateItem = (req, res) => {
        console.log("inside updateItem");
        console.log(req.params.id);  
        console.log(req.body);      
        Item.findByIdAndUpdate(req.params.id, req.body, {
            new: true,   
            runValidators: true  
        })
            .then((updatedItem) => {
                console.log(updatedItem);
                res.json(updatedItem);
            })
            .catch((err) => {
                console.log(err);
                res.json(err);
            })
    };
    
    // delete Blog
    module.exports.deleteItem = (req, res) => {
        console.log("inside deleteItem");
        console.log(req.params.id);
    
        Item.findByIdAndDelete(req.params.id)
            .then((deletedItem) => {
                // this is the deleted document....your last chance!!!
                console.log(deletedItem);
                res.json(deletedItem);
            })
            .catch((err) => {
                console.log(err);
                res.json(err);
            })
    };
    