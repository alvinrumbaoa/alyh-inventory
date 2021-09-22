const express = require('express'); // import express 
const app = express(); 
const cors = require("cors");   //middleware
const port = 8000;   
app.use(cors());               
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// routes here

require("./config/mongoose.config.js"); //  connecting to mongoose
require("./routes/item.routes")(app);
require("./routes/customer.routes")(app);
require("./routes/order.routes")(app);
require("./routes/user.routes")(app);
require("./routes/cart.routes")(app);

app.listen(port , () => console.log("Connected to  localhost " + port ));