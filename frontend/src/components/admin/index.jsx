import React from "react";

import "./index.scss";

import { useSelector, useDispatch } from "react-redux";


function AdminDashBoard(){
    const isAdmin = useSelector((state) => state.isAdmin);
    // console.log(isAdmin);
    if(isAdmin == false){
        return (
            <div>
                Please Login with Admin id
            </div>
        )
    }
    return (
        <div>
           <h3>All Employees</h3>
           <hr />
        </div>
    )
};

export default AdminDashBoard;

