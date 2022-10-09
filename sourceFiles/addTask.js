import express from "express";
import bodyParser from "body-parser";
import Tasks from "../models/tasks.js";

var app = express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


app.post("/", (req, res) => {
    var data = req.body;
    console.log(data);
    var task  = new Tasks({
        email : data.email,
        type : data.type,
        start : data.startTime,
        description : data.description,
        duration : data.duration
    })

    try{
        task.save();
        console.log("task saved")
        res.send("task saved succesfully");
    }
    catch(err){
        console.log("therre was an error trying to save task ");
        console.log(err);
        res.send("Please try again");
    }
})

export default app;