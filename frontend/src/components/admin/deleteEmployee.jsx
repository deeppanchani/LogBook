import React from "react";
import "./deleteEmployees.scss";

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

export default DeleteButton;