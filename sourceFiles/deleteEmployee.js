import express from "express";
import bodyParser from "body-parser";
import Employees from "../models/users.js";

var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post("/", (req, res) => {
  var data = req.body;
    console.log(data);
  Employees.deleteOne({email : data.email}, function(err){
    if(err){
        console.log(err);
    }
    else{
        res.send("Deleted");
    }
  })
  
});

export default app;
