import express from "express";
import bodyParser from "body-parser";
import Employees from "../models/users.js";

var app = express();

app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

app.post("/", (req,res) => {
    var data = req.body;

    console.log("we in backend on login");
    console.log(data);
    Employees.findOne({email : data.email}, function(err, result){
        if(err){
            console.log("we got a error");
            console.log(err);
        }
        else{
            if(result == null){
                res.send("NO USER");
            }
            else if(data.password != result.password){
                res.send("INVALID LOGIN");
            }
            else res.send(result);

        }
    })




})


export default app;


