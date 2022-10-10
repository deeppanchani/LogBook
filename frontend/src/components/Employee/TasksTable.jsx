import React from "react";
//import { useState } from "react";
import "./TasksTable.scss";
import "./index.scss";

function AllTasks(props){

    var data = props.props;
    var today = props.dateFor;
    // console.log(data);
    // const [tasks, setTasks] = useState(data);
    const newArr = []
    // var today = new Date();
    if(typeof today != "string"){
         var dd = String(today.getDate()).padStart(2, "0");
         var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
         var yyyy = today.getFullYear();
         today = yyyy + "-" + mm + "-" + dd;
    }

   
    // console.log("in table")
    // console.log(today)
    // console.log(data.length)
    for(var i=0;i<data.length;i++){
        if(today === data[i].start.slice(0, 10)){
            newArr.push(data[i])
        }
    }
    return (
        <div className="tasklist">
            <table className="task-data">
                <thead className="s2">
                    <tr>
                        <th>Task Type</th>
                        <th>Task Description</th>
                        <th>Start Time</th>
                        <th>Time Taken</th>
                    </tr>
                </thead>
                <tbody>
                    {newArr.map((task) => (
                        <tr key={task._id}>
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
