import Employees from "../models/users.js";

function createUser(){
    const d = new Date();
    var Employee = new Employees({
        name : "Admin",
        email : "admin@gmail.com",
        password : "asdf",
        contact: "1234",
        joining : d.getTime(),
        department : "Dep",
        admin : true
    })
    try{
        Employee.save();
        console.log("employee saved succesfully");
    }

    catch(err){
        console.log(err);
    }
}

export default createUser;