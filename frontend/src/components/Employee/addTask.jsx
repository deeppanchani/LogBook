import React from "react";
import axios from "axios";
import "./addTask.scss";

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
        <div className="addTask">
            <span><h2>Add New Task</h2></span>
            <form className="button">
                    <label htmlFor="type" className="s2">Task Type</label>
                    <select id="type" value = {type} onChange = {(event) => handleType(event.target.value)}>
                        <option value="Work">Work</option>
                        <option value="Meeting">Meeting</option>
                        <option value="Break">Break</option>
                    </select>
                    <br />
                    <label htmlFor="description" className="s2">Type Description</label>
                    <input type="text" id="description"
                    value={description}
                    onChange = {(e) => setDescription(e.target.value)}/>
                    <br />
                    <label htmlFor="datatime-local" className="s2">Task Type</label>
                    <input id="datatime-local" type = "datetime-local" value = {startTime}
                    onChange = {(e) => setStart(e.target.value)}/>
                    <br />
                    <label htmlFor="number" className="s2">Task Duration</label>
                    <input id="number" type="number" value = {duration}
                    onChange = {(e) => setDuration(e.target.value)}/>
                    <br />
                    <button onClick = {AddTask} className="button">
                        Add Task
                    </button>
            </form>
        </div>
    )
}

export default AddTaskButton;