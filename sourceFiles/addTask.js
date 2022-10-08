import express from "express";
import bodyParser from "body-parser";
import Tasks from "../models/tasks.js";

var app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


app.post("/", (req, res) => {
    var data = req.body;
    var task  = new Tasks({
        email : data.email,
        type : data.email,
        start : data.start,
        description : data.description,
        duration : data.duration
    })

    try{
        task.save();
        res.send("task saved succesfully");
    }
    catch(err){
        console.log("therre was an error trying to save task ");
        console.log(err);
        res.send("Please try again");
    }
})

export default app;