import React from "react";
import "./index.scss"
import BarChart from "./BarChart"; 
function EmployeeDashboard(){
    console.log("we at employee")

    return (
        //
        <div className="employee-dashboard">
            <div className="top-employee">
                <h3>Today's Tasks</h3>
                <button className="edit-button"> Edit Profile</button>
                <button className="add-button">+ Add Task</button>
            </div>
            <div className="statGraphDaily">
                <BarChart charData  />
            </div>
        </div>
    )
}

export default EmployeeDashboard;