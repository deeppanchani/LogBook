import React from "react";
import { useState } from "react";
import {MdDelete, MdEdit} from "react-icons/md"
import "./allEmployees.scss";
import "./index.scss";


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
                    <th>Contact</th>
                    <th>Department</th>
                    <th>Joining Date</th>
                    <th></th>
                </thead>
                <tbody>
                    {employees.map((employee) => (
                        <tr class="b2">
                            <td>{employee.name}</td>
                            <td>{employee.email}</td>
                            <td>{employee.contact}</td>
                            <td>{employee.department}</td>
                            <td>{employee.joining.slice(0, 10)}</td>
                            <td>
                                <button><MdEdit size={25} color="#0361FF"/></button>
                                <button><MdDelete size={25} color="#F21B3F"/></button>
                            </td>
                        </tr>
                    ))} 
                </tbody>
            </table>
        </div>
    )
}

export default ShowAllData;