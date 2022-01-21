const CustomerController = require('../controllers/customer.controller');

module.exports = function(app) {
	// get all Customer
	app.get("/api/customers", CustomerController.getAllCustomer);
	// create Customer
	app.post("/api/customers", CustomerController.createCustomer);
	// get one Customer
	// create a param variable called "id"
	app.get("/api/customers/:id", CustomerController.getOneCustomer);
	// update Customer
	app.put("/api/customers/:id", CustomerController.updateCustomer);
	// delete Customer
	app.delete("/api/customers/:id", CustomerController.deleteCustomer);
}
