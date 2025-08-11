const express = require("express");
const app = express();

app.use(function(req,res,next){
    console.log("hello from middleware");
    next();
});

app.get("/",function(req,res){
     res.send("welcome to home");
});

app.get("/products",function(req,res){
     res.send("welcome to products section");
});

app.get("/contact",function(req,res){
     res.send("welcome to contact section");
});

const Port = 3000;

app.listen(Port,()=>{
    console.log(`http://localhost:${Port}`);
});