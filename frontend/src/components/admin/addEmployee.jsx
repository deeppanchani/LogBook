import React from "react";
import axios from "axios";

import "./addEmployee.scss";

function AddEmployee(){
    var d = new Date();
    var [name, setName] = React.useState("");
    var[email, setEmail] = React.useState("");
    var [contact, setContact] = React.useState("");
    var [department, setDepartment] = React.useState("");
    var [joining, setJoining] = React.useState(d.getTime());
    var [password, setPassword] = React.useState("");

    

    const sendEmployeeData = async (event) => {
        event.preventDefault();
        
        var admin = false
        var data = {name, email, contact, department, joining, password, admin};
        var response = await axios.post("/addEmployee", data);
        if (response.data == "Employee added to database succesfully"){
            alert("Employee Added to database Successfully");
        }else{
            alert("Please try again with valid data");
        }
          console.log(response);
    }

    return (
      <div>
        <form action="">
          <label htmlFor="name">Name</label>
          <br />
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <br />
          <label htmlFor="email">Email</label>
          <br />
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <br />
          <label htmlFor="contact">Contact Number</label>
          <br />
          <input
            type="tel"
            id="contact"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
          />
          <br />
          <label htmlFor="department">Department</label>
          <br />
          <input
            type="text"
            id="department"
            value={department}
            onChange={(e) => setDepartment(e.target.value)}
          />
          <br />
          <label htmlFor="date">Joining Date</label>
          <br />
          <input
            type="date"
            value={joining}
            onChange={(e) => setJoining(e.target.value)}
          />
          <br />
          <label htmlFor="password">Password</label>
          <br />
          <input
            type="text"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
            <br />
          <button onClick = {sendEmployeeData}> Add </button>
          <br />
        </form>
      </div>
    );
}

export default AddEmployee;