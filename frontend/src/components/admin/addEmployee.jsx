import React from "react";

function AddEmployee(){
    return (
        <div>
            <form action="">
                <label htmlFor="name">Name</label>
                <br/>   
                <input type="text" />
                <br/>   
                <label htmlFor="email">Email</label>
                <br/>   
                <input type="email" />
                <br/>   
                <label htmlFor="contact">Contact Number</label>
                <br/>   
                <input type="tel" />
                <br/>   
                <label htmlFor="department">Department</label>
                <br/>   
                <input type="text" />
                <br/>   
                <label htmlFor="joining">Joining Date</label>
                <br/>   
                <input type="date" />
                <br/>   
                <label htmlFor="password">Password</label>
                <br/>   
                <input type="password" />
            </form>
        </div>
    )
}

export default AddEmployee;