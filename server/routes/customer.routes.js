const CustomerController = require('../controllers/customer.controller');

module.exports = function(app) {
	// get all Customer
	app.get("/api/customer", CustomerController.getAllCustomer);
	// create Customer
	app.post("/api/customer", CustomerController.createCustomer);
	// get one Customer
	// create a param variable called "id"
	app.get("/api/customer/:id", CustomerController.getOneCustomer);
	// update Customer
	app.put("/api/customer/:id", CustomerController.updateCustomer);
	// delete Customer
	app.delete("/api/customer/:id", CustomerController.deleteCustomer);
}
