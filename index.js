import express from "express";
import bodyParser from "body-parser";


import connectDB from "./sourceFiles/connectDB.js";
import loginFile from "./sourceFiles/login.js";
import createUser from "./sourceFiles/fakeFile.js";
import registerUser from "./sourceFiles/registerUser.js";
import allEmployeesFile from "./sourceFiles/allEmployees.js";

var app = express();
app.use(bodyParser.urlencoded({extended :true}));


connectDB();

// createUser();
app.use("/login", loginFile);
app.use("/addEmployee", registerUser);
app.use("/getEmployees", allEmployeesFile);


var port = 8181;


app.listen(port, () => {
    console.log("backend running at port " + port);
})


