import Express from "express";
import bodyParser from "body-parser";
import Tasks from "../models/tasks.js";


var app = Express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());



app.post("/", (req, res) => {
    var data = req.body;
    
    console.log(data);

    Tasks.find({email : data.email}, function(err,result){
        if(err){
            console.log("we got error");
            console.log(err);
            res.send("Error");
        }else{
            // console.log(result);
            res.send(result);
        }
    })

})

export default app;