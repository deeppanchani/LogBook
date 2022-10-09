import React from "react";
import { useState } from "react";
import "./TasksTable.scss";
import "./index.scss";

function AllTasks(props){

    var data = props.props;
    console.log(data);

    const [tasks, setTasks] = useState(data);
    // console.log(tasks.lenthd)

    return (
        <div className="tasklist">
            <table className="task-data">
                <thead>
                    <th>Task Type</th>
                    <th>Task Description</th>
                    <th>Start Time</th>
                    <th>Time Taken</th>
                </thead>
                <tbody>
                    {data.map((task) => (
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
