// load up all of our keys and values from the .env file into memory
// 		we can access this through an object called "process.env"
require('dotenv').config();

const express = require('express'); // import express 
const app = express(); 
// inside the server directory, you need to run:
//		npm install cors
const cors = require("cors");   //middleware
// to be able to read cookies, we need our cookieparser library loaded
const cookieParser = require('cookie-parser');
const socketio = require('socket.io');



// server configuration first
app.use(express.json());
app.use(express.urlencoded({
	extended: true,
}));
app.use(cors({
	credentials: true,
	origin: "http://localhost:3000",
}));
app.use(cookieParser());

// run the Mongoose connect file
require('./config/mongoose.config');



// Routes next 

// require pulls in the function we created in routes
//	then it invokes the function with the app express server as an argument
require("./routes/item.routes")(app);
require("./routes/customer.routes")(app);
require("./routes/order.routes")(app);
require("./routes/user.routes")(app);
require("./routes/cart.routes")(app);


// start server listening for requests
// save the returned http server object so we can use it with socketio

const server = app.listen(process.env.MY_PORT, () => {
    console.log("Listening at Port " + process.env.MY_PORT)
});

const io = socketio(server, {
	cors: {
		origin: 'http://localhost:3000',
		methods: ['GET', 'POST'],
		credentials: true,
		allowedHeaders: ['*']   // this will allow all configurations of headers
	}
})

// 2 keywords to focus on when using socketio
//		on - This means we are listening
//		emit - this is us speaking / sending
io.on("connection", (socket) => {
	// socket is an object that contains info to uniquely identify a client
	console.log(`Server side socket id: ${socket.id}`);

	// ALL listening MUST happen inside of my io.on function
	//		from here on, we will use the socket object!
	socket.on("added_new_movie", (data) => {
		console.log("In added_new_movie");
		console.log(data);
		socket.broadcast.emit("new_movie_added", data);
	})

})