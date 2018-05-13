const express         = require("express"),
app                   = express(),
bodyparser            = require("body-parser"),
methodOverride        = require("method-override"),
flash                 = require("connect-flash"),
router                = require("./routes/routes");


app.use(express.static("public"));
app.set("view engine" , "ejs");
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}));
app.use(methodOverride("_method"));
app.use(flash());
app.use(router);


app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server Started!!");
});