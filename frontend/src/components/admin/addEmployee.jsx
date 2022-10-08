import React from "react";
import axios from "axios";


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
        console.log(response);
    }

    return (
      <div>
        <form action="">
          <label htmlFor="name">Name</label>
          <br />
          <input type="text" id = "name"/>
          <br />
          <label htmlFor="email">Email</label>
          <br />
          <input type="email" id = "email"/>
          <br />
          <label htmlFor="contact">Contact Number</label>
          <br />
          <input type="tel" id = "contact"/>
          <br />
          <label htmlFor="department" >Department</label>
          <br />
          <input type="text" id = "department"/>
          <br />
          <label htmlFor="date">Joining Date</label>
          <br />
          <input type="date" />
          <br />
          <label htmlFor="password">Password</label>
          <br />
          <input type="text" id = "password"/>
        </form>
      </div>
    );
}

export default AddEmployee;