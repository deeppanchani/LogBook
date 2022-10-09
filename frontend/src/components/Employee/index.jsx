import React from "react";
import "./index.scss"
import {useSelector} from "react-redux"
import AddTaskButton from "./addTask";
import axios from "axios";
import AllTasks from "./TasksTable";
import EditProfile from "./editProfile";
import PieChart from "./PieChart";

import TodayEmployee from "./todayEmployee"; 

function EmployeeDashboard(){
    var [addTaskShow, setAddTask] = React.useState(false);
    var [editProfileShow, setEditProfile] = React.useState(false);
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
        setEditProfile(false);
        setAddTask(!addTaskShow);
    }

    function handlePress() {
      setAddTask(false);
      setEditProfile(!editProfileShow);
    }

    if(isLoggedIn == false){
        return (
            <div>
                Please Login to Be here
            </div>
        )
    }

    

    // function 

    else return (
        <div>
          <div className="employee-dashboard">
            <div className="top-employee">
              <h3>Today's Tasks</h3>
              <button className="edit-button" onClick={handlePress}>
                {" "}
                Edit Profile
              </button>
              <button className="add-button" onClick={handleEdit}>
                + Add Task
              </button>
            </div>
            {/* <div className="statGraphDaily">
                  <PieChart charData  />
              </div> */}
            {/* <br />
              <div className="weeklyGraph">
                  <BarChart charData  />
              </div> */}
           
          </div>
          <AllTasks props={allTasks} />
          <TodayEmployee props = {allTasks}/>
          {editProfileShow && <EditProfile props = {handlePress}/>}
          {addTaskShow && <AddTaskButton props = {handleEdit}/>}
        </div>
      );
  }
  
  export default EmployeeDashboard;