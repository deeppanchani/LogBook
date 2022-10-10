import React from "react";
import axios from "axios";
import "./addTask.scss";
import {MdCancel} from "react-icons/md";

import {useSelector} from "react-redux"
function AddTaskButton(props){
    var [type, setType] = React.useState("Work");
    var t = new Date();
    var [description, setDescription] = React.useState("");
    var [startTime, setStart] = React.useState(t.getTime());
    var [duration, setDuration] = React.useState(0);

    var email = useSelector((state) => state.Email);

    const  AddTask = async (e) => {

        e.preventDefault();
        props.props();
        var data = {email,type, description, startTime, duration};
        var t2 = new Date(startTime);
        console.log(t2);
        console.log(t);
        if(t2.getTime() > t.getTime()){
            alert("Please Set A valid date");
        }
        else if(email == null || description == null || startTime == null || duration == null){
            alert("please enter all fields");
        }else{
            var response = await axios.post("addTask", data);
            if (response.data === "task saved succesfully") {
              alert("taks saved succesfully");
              props.refreshTasks();
            }
        }
        
    }

    const handleType = (newType) => {
        setType(newType);
    }



    return (
        <div className="modal">
            <button className="cancel" onClick = {(e) => {
                e.preventDefault();
                props.props();
            }}>
                <MdCancel size={30} color="#F21B3F"/>
            </button>
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
        </div>
    )
}

export default AddTaskButton;