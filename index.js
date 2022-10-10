import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";

import path from "path";
import { fileURLToPath } from "url";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

import connectDB from "./sourceFiles/connectDB.js";
import loginFile from "./sourceFiles/login.js";
import createUser from "./sourceFiles/fakeFile.js";
import registerUser from "./sourceFiles/registerUser.js";
import allEmployeesFile from "./sourceFiles/allEmployees.js";
import addTaskFile from "./sourceFiles/addTask.js";
import getTasksForEmployees from "./sourceFiles/getTasksForEmployees.js";
import updateEmployeesFile from "./sourceFiles/updateEmployee.js";
import deleteEmployeeFile from "./sourceFiles/deleteEmployee.js";
var app = express();
app.use(bodyParser.urlencoded({extended :true}));

dotenv.config();


connectDB();

// createUser();
app.use("/login", loginFile);
app.use("/addEmployee", registerUser);
app.use("/getEmployees", allEmployeesFile);
app.use('/addTask', addTaskFile);
app.use("/getTasksForEmployee", getTasksForEmployees);
app.use("/updateEmployee", updateEmployeesFile);
app.use("/deleteEmployee", deleteEmployeeFile);

var port = process.env.PORT || 8181;



if (process.env.NODE_ENV === "production") {
  app.use(express.static("frontend/build"));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "frontend", "build", "index.html"));
  });
}



app.listen(port, () => {
    console.log("backend running at port " + port);
})


