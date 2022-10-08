import React from "react";

function ShowAllData(props){
    console.log("this is from showAll Data");
    var data = props.props;
    console.log(data);

    return (
        <div>
            Data
        </div>
    )
}

export default ShowAllData;