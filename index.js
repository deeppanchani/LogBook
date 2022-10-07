import express from "express";
import bodyParser from "body-parser";


import connectDB from "./sourceFiles/connectDB.js";
import loginFile from "./sourceFiles/login.js";

var app = express();
app.use(bodyParser.urlencoded({extended :true}));

connectDB();

app.use("/login", loginFile);

var port = 8181;


app.listen(port, () => {
    console.log("backend running at port " + port);
})


