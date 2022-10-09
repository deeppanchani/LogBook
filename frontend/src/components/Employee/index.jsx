import React from "react";
import "./index.scss";
import { useSelector } from "react-redux";
import AddTaskButton from "./addTask";
import axios from "axios";
import AllTasks from "./TasksTable";
import EditProfile from "./editProfile";
import PieChart from "./PieChart";
import BarChart from "./StackedBarChart";

function EmployeeDashboard() {
  var [addTaskShow, setAddTask] = React.useState(false);
  var [editProfileShow, setEditProfile] = React.useState(false);
  var isLoggedIn = useSelector((state) => state.isLoggedIn);
  var email = useSelector((state) => state.Email);
  var [allTasks, setAllTasks] = React.useState([]);

  React.useEffect(() => {
    getAllTasks();
  }, []);

  const getAllTasks = async () => {
    var data = { email };
    var response = await axios.post("/getTasksForEmployee", data);
    // console.log(response);
    setAllTasks(response.data);
  };

  function handleEdit() {
    setAddTask(!addTaskShow);
  }

  function handlePress() {
    setEditProfile(!editProfileShow);
  }

  if (isLoggedIn == false) {
    return <div>Please Login to Be here</div>;
  }

  // function
  else
    return (
      <main>
        <div className="employee-dashboard">
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
        {editProfileShow && <EditProfile props={handlePress} />}
        {addTaskShow && <AddTaskButton props={handleEdit} />}
      </main>
    );
}

export default EmployeeDashboard;
