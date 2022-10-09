import React from "react";
import { useState } from "react";
import {MdDelete, MdEdit} from "react-icons/md"
import "./allEmployees.scss";
import "./index.scss";

function DeleteButton(){
    return (
        <div>
            <div class="container">
                <div class="data">
                    <h3>Are you absolutely sure?</h3>
                    <p class="b1">This action cannot be undone. This will permanently delete the Employee. 
                        All the data regarding the employee such as name, contact details, department, etc. will be deleted.</p>
                </div>
                <div class="buttons">
                    <button id="btn1" type="button">No, Dont Delete</button>
                    <button id="btn2" type="button">Yes, Delete the Employee</button>
                </div>
            </div> 
        </div>
    )
}

function ShowAllData(props){
    console.log("this is from showAll Data");
    var data = props.props;
    console.log(data);

    const [employees, setEmployees] = useState(data);
    return (
        <div className="allEmployees">
            <table class="content-table">
                <thead class="s1">
                    <th>Name</th>
                    <th>Email</th>
                    <th>Contact Number</th>
                    <th>Department</th>
                    <th>Joining Date</th>
                    <th>Edit/Delete</th>
                </thead>
                <tbody>
                    {employees.map((employee) => (
                        <tr class="b2">
                            <td>{employee.name}</td>
                            <td>{employee.email}</td>
                            <td>{employee.contact}</td>
                            <td>{employee.department}</td>
                            <td>{employee.joining.slice(0, 10)}</td>
                            <td><button>Edit</button><button>Delete</button></td>
                        </tr>
                    ))} 
                </tbody>
            </table>
        </div>
    )
}

export default ShowAllData;