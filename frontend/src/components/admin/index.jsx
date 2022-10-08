import React from "react";

import "./index.scss";
import AddEmployee from "./addEmployee";
import { useSelector, useDispatch } from "react-redux";


function AdminDashBoard(){
  var [isAddEmployeeShow, setIsEmployee] = React.useState(false);
  function handleAddEmployee(){
    setIsEmployee(!isAddEmployeeShow);
  }

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
      <div className="admin">
        <div className="top-part">
          <h3>All Employees</h3>
          <button onClick = {handleAddEmployee}>Add + </button>
        </div>
        {isAddEmployeeShow && <AddEmployee/>}
      </div>
    );
};

export default AdminDashBoard;

