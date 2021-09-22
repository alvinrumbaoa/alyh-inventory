const ItemController = require('../controllers/item.controller');

module.exports = function(app) {
	// get all Item
	app.get("/api/item", ItemController.getAllItem);
	// create Item
	app.post("/api/item", ItemController.createItem);
	// get one Item
	// create a param variable called "id"
	app.get("/api/item/:id", ItemController.getOneItem);
	// update Item
	app.put("/api/item/:id", ItemController.updateItem);
	// delete Item
	app.delete("/api/item/:id", ItemController.deleteItem);
}
