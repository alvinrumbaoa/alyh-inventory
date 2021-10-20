const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const { isEmail } = require('validator');

const CustomerSchema = new Schema({
    firstName: {
        type: String,
        required: true
    }, 
	lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: [true,'Please enter an email'],
        unique: true,
        lowercase: true,
        validate: [isEmail, 'Please enter a valid email']
    },
    address: {
        type: String,
        required: [true, 'Please enter a valid password'],
        minlength: [6, 'Minimum password length must be 6 characters']
    },
    DOB: {
        type: Date,
        required: [true, 'Please enter a valid date'],
    
    },
    phoneNumber:{
        type: Number,
        required: [true, 'Please enter a valid phone number'],
        minlength: [10, "Please enter a valid phone number format XXXXXXXXXX"]
    }
},{timestamps: true});

module.exports = Customer = mongoose.model('customer',CustomerSchema);