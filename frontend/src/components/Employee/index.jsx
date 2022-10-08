import React from "react";
import "./index.scss"

function EmployeeDashboard(){
    return (
        <div className="employee-dashboard">
            <div className="top-employee">
                <h3>Today's Tasks</h3>
                <button className="edit-button"> Edit Profile</button>
                <button className="add-button">+ Add Task</button>
            </div>
        </div>
    )
}

export default EmployeeDashboard;