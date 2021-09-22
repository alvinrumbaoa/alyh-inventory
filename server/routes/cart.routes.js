const CartController = require('../controllers/cart.controller');

module.exports = function(app) {
	// get all Cart
	app.get("/api/cart", CartController.getAllCart);
	// create Cart
	app.post("/api/cart", CartController.createCart);
	// get one Cart
	// create a param variable called "id"
	app.get("/api/cart/:id", CartController.getOneCart);
	// update Cart
	app.put("/api/cart/:id", CartController.updateCart);
	// delete Cart
	app.delete("/api/cart/:id", CartController.deleteCart);
}
