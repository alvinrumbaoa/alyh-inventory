const Customer = require("../models/customer.model");

module.exports.getAllCustomer = (req, res)  => {
    console.log("get all Customer post");
    
    Customer.find({ })
        .then((allCustomer) =>{
                console.log(allCustomer);
                res.json(allCustomer);
        })
        .catch((err) => {
                console.log(err);
                res.json(err);
        })
    };

    module.exports.createCustomer =(req, res) =>{
        console.log(require);
        Customer.create(req.body)
            .then((newCustomer) => { 
                    console.log(newCustomer);
                    res.json(newCustomer);
            })
            .catch((err) =>{
                console.log(err);
                res.json(err);
            })
    }

    module.exports.getOneCustomer = (req, res) => {
        console.log("inside getOneCustomer");
        console.log(req.params.id);
    
        Customer.findById(req.params.id)
            .then((oneCustomer) => {
                console.log(oneCustomer);
                res.json(oneCustomer);
            })
            .catch((err) => {
                console.log(err);
                res.json(err);
            })
    };


    module.exports.updateCustomer = (req, res) => {
        console.log("inside updateCustomer");
        console.log(req.params.id);  
        console.log(req.body);      
        Customer.findByIdAndUpdate(req.params.id, req.body, {
            new: true,   
            runValidators: true  
        })
            .then((updatedCustomer) => {
                console.log(updatedCustomer);
                res.json(updatedCustomer);
            })
            .catch((err) => {
                console.log(err);
                res.json(err);
            })
    };
    
    // delete Blog
    module.exports.deleteCustomer = (req, res) => {
        console.log("inside deleteCustomer");
        console.log(req.params.id);
    
        Customer.findByIdAndDelete(req.params.id)
            .then((deletedCustomer) => {
                // this is the deleted document....your last chance!!!
                console.log(deletedCustomer);
                res.json(deletedCustomer);
            })
            .catch((err) => {
                console.log(err);
                res.json(err);
            })
    };
    