import Express from "express";
import bodyParser from "body-parser";

import Employees from "../models/users.js";

var app = Express();
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());


app.post("/", (req,res) => {
    var data = req.body;
    console.log(data);

    try{
        Employees.updateOne({email : data.email},
             {password : data.password,
                contact : data.contact,
                name : data.name
        }, (err, result) => {
            if(err){
                console.log(err);
            }
            // console.log(result);
        })



        

        res.send("updation Succesful");
    }
    catch(err){
        console.log(err);
        res.send("error");
    }



})

export default app;