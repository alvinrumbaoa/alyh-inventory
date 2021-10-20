const UserController = require('../controllers/user.controller');

module.exports = function(app) {
	// register user
	app.post("/api/users/signup", UserController.signup);
	// login user
	app.post("/api/users/login", UserController.login);
	// logout user
	app.post("/api/users/logout", UserController.logout);
}