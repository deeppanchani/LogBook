import React from "react";
import "./index.scss"
import {useSelector} from "react-redux"
import AddTaskButton from "./addTask";


function EmployeeDashboard(){
    var [addTaskShow, setAddTask] = React.useState(false);
    var isLoggedIn = useSelector((state) => state.isLoggedIn);

    function handleEdit(){
        setAddTask(!addTaskShow);
    }

    if(isLoggedIn == false){
        return (
            <div>
                Please Login to Be here
            </div>
        )
    }
    else return (
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