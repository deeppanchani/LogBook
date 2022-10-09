import React from "react";
import "./index.scss"
import {useSelector} from "react-redux"
import AddTaskButton from "./addTask";
import axios from "axios";
import AllTasks from "./TasksTable";

function EmployeeDashboard(){
    var [addTaskShow, setAddTask] = React.useState(false);
    var isLoggedIn = useSelector((state) => state.isLoggedIn);
    var email = useSelector((state) => state.Email);
    var [allTasks, setAllTasks] = React.useState([]);

    React.useEffect(() => {
        getAllTasks();
    }, [])

    const getAllTasks =  async () => {
        var data = {email};
        var response = await axios.post("/getTasksForEmployee", data)
        // console.log(response);
        setAllTasks(response.data);
    }

    function handleEdit(){
        setAddTask(!addTaskShow);
    }

    if(isLoggedIn == false){
        return (
            <div>
                Please Login to Be here
            </div>
        )
    }
    else return (
        <div className="employee-dashboard">
            <div className="top-employee">
                <h3>Today's Tasks</h3>
                <button className="edit-button" > Edit Profile</button>
                <button className="add-button" onClick={handleEdit} >+ Add Task</button>
            </div>
            {addTaskShow && <AddTaskButton />}
            <AllTasks props = {allTasks}/>
        </div>
    )
}

export default EmployeeDashboard;