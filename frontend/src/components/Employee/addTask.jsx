import React from "react";
import axios from "axios";

import {useSelector} from "react-redux"
function AddTaskButton(props){
    var [type, setType] = React.useState("");
    var t = new Date();
    var [description, setDescription] = React.useState("");
    var [startTime, setStart] = React.useState(t.getTime());
    var [duration, setDuration] = React.useState(0);

    var email = useSelector((state) => state.Email);

    const  AddTask = async (e) => {

        e.preventDefault();
        props.props();
        var data = {email,type, description, startTime, duration};
        console.log(data);
        var response = await axios.post("addTask", data);
        console.log(response);
        if(response.data == "task saved succesfully"){
            alert("taks saved succesfully");
        }
    }

    const handleType = (newType) => {
        setType(newType);
    }

    return (
        <div>
           <form >
                <select value = {type} onChange = {(event) => handleType(event.target.value)}>
                    <option value="Work">Work</option>
                    <option value="Meeting">Meeting</option>
                    <option value="Break">Break</option>
                </select>
                <br />
                <input type="text" 
                value={description}
                onChange = {(e) => setDescription(e.target.value)}/>
                <br />
                <input type = "datetime-local" value = {startTime}
                onChange = {(e) => setStart(e.target.value)}/>
                <br />
                <input type="number" value = {duration}
                onChange = {(e) => setDuration(e.target.value)}/>
                <button onClick = {AddTask}>
                    Add Task
                </button>
           </form>
        </div>
    )
}

export default AddTaskButton;