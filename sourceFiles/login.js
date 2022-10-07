import express from "express";
import bodyParser from bodyParser;


var app = express();

app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

app.post("/", (req,res) => {
    console.log("we in backend on login");
    res.send("data recieved");
    
})


export default app;


