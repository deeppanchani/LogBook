import express from "express";
import Employees from "../models/users.js";

var app = express();

app.get("/", (req,res) => {
    Employees.find({}, (err, result) => {
        if(err){
            console.log(err);
        }
        else{
            console.log(result);
            res.send(result);
        }
    })
})

export default app;