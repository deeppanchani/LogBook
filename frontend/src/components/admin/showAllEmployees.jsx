import React from "react";
import {MdDelete, MdEdit} from "react-icons/md"
import "./allEmployees.scss";


function ShowAllData(props){
    console.log("this is from showAll Data");
    var data = props.props;
    console.log(data);

    return (
        <div className="allEmployees">
            
        </div>
    )
}

export default ShowAllData;