const OrderController = require('../controllers/order.controller');

module.exports = function(app) {
	// get all Order
	app.get("/api/order", OrderController.getAllOrder);
	// create Order
	app.post("/api/order", OrderController.createOrder);
	// get one Order
	// create a param variable called "id"
	app.get("/api/order/:id", OrderController.getOneOrder);
	// update Order
	app.put("/api/order/:id", OrderController.updateOrder);
	// delete Order
	app.delete("/api/order/:id", OrderController.deleteOrder);
}
