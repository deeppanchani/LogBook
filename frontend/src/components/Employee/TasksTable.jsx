import React from "react";
import { useState } from "react";
import "./TasksTable.scss";
import "./index.scss";

function AllTasks(props){

    var data = props.props;
    console.log(data);

    const [tasks, setTasks] = useState(data);
    const newArr = []
    var today = new Date();
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    today = yyyy + '-' + mm + '-' + dd;
    console.log("in table")
    console.log(today)
    console.log(data.length)
    for(var i=0;i<data.length;i++){
        console.log(data[i].start.slice(0, 10))
        if(today == data[i].start.slice(0, 10)){
            console.log("pushing")
            newArr.push(data[i])
        }
    }
    return (
        <div className="tasklist">
            <table class="task-data">
                <thead>
                    <th>Task Type</th>
                    <th>Task Description</th>
                    <th>Start Time</th>
                    <th>Time Taken</th>
                </thead>
                <tbody>
                    {newArr.map((task) => (
                        <tr>
                            <td>{task.type}</td>
                            <td>{task.description}</td>
                            <td>{task.start == null ? " 00:00:00" : task.start.slice(11,19)}</td>
                            <td>{task.duration}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default AllTasks;
