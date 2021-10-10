const dotenv = require('dotenv').config();
const cookieParser = require("cookie-parser");
const express = require('express'); // import express 
const app = express(); 
const cors = require("cors");   //middleware

app.use(cookieParser());
app.use(bodyParser.json({limit: "30mb", extended: true})); 
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(cors({
	credentials: true,
	origin: "http://localhost:3001",
}));

// routes here

require("./config/mongoose.config.js"); //  connecting to mongoose
require("./routes/item.routes")(app);
require("./routes/customer.routes")(app);
require("./routes/order.routes")(app);
require("./routes/user.routes")(app);
require("./routes/cart.routes")(app);

app.listen(process.env.SERVER_PORT, () => console.log(`Server listening on port ${process.env.SERVER_PORT}`));