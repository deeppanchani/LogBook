import { Express } from "express";
import bodyParser from "body-parser";
import Tasks from "../models/tasks.js";


var app = Express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


app.post("/", (req, res) => {
    var data = req.body;
    
    

})

export default app;