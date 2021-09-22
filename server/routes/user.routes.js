const UserController = require('../controllers/user.controller');

module.exports = function(app) {
	// get all User
	app.get("/api/user", UserController.getAllUser);
	// create User
	app.post("/api/user", UserController.createUser);
	// get one User
	// create a param variable called "id"
	app.get("/api/user/:id", UserController.getOneUser);
	// update User
	app.put("/api/user/:id", UserController.updateUser);
	// delete User
	app.delete("/api/user/:id", UserController.deleteUser);
}
