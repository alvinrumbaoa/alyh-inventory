const mongoose = require("mongoose");
const dbName = "inventoryDB"; 

mongoose.connect("mongodb+srv://xenofy:Senpou_23@cluster0.8i5v5.mongodb.net/" + dbName + "?retryWrites=true&w=majoritye", { 
        useNewUrlParser: true,
        useUnifiedTopology: true

})
        .then(() => console.log("Established connection with "+ dbName))
        .catch(err => console.log("Something wrong when connecting with " +dbName));