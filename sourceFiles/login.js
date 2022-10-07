import express from "express";
import bodyParser from "body-parser";


var app = express();

app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

app.post("/", (req,res) => {
    var data = req.body;

    console.log("we in backend on login");
    console.log(data);
    res.send("data recieved");

})


export default app;


