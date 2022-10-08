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
                <label htmlFor="">Name</label>
                <input type="text" />
                <label htmlFor=""></label>
                <input type="text" />
                <label htmlFor=""></label>
                <input type="text" />
                <label htmlFor=""></label>
                <input type="text" />

                <button onClick = {sendEmployeeData}>Add</button>
            </form>
        </div>
    )
}

export default AddEmployee;