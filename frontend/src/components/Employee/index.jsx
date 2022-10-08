import React from "react";
import "./index.scss"

import AddTaskButton from "./addTask";

function EmployeeDashboard(){
    var [addTaskShow, setAddTask] = React.useState(false);

    function handleEdit(){
        setAddTask(!addTaskShow);
    }

    return (
        <div className="employee-dashboard">
            <div className="top-employee">
                <h3>Today's Tasks</h3>
                <button className="edit-button" > Edit Profile</button>
                <button className="add-button" onClick={handleEdit} >+ Add Task</button>
            </div>
            {addTaskShow && <AddTaskButton />}

        </div>
    )
}

export default EmployeeDashboard;