var express = require("express");
var app = express();

app.get("/", function(req, res){
   res.send("HELLO buddy this is the home route") 
});

app.get("/test", function(req, res){
   res.send("This is the test route");
});


app.listen(process.env.PORT, process.env.IP, function(){
   console.log("Server Started"); 
});