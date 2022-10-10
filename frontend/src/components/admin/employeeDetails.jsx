import React from "react";
import axios from "axios";

import {MdArrowDropDownCircle} from "react-icons/md"
import "./employeeDetails.scss"
import AllTasks from "../Employee/TasksTable";
import TodayEmployee from "../Employee/todayEmployee";
import WeeklyEmployeeBar from "../Employee/weeklyEmployeeBar";

function Details(props) {
  var today = new Date();
  var [dateRequired, setDateRequired] = React.useState(today);

  // var email = props.email;
  var [allTasks, setAllTasks] = React.useState([]);
  const getAllTasks = async () => {
    var data = { email: props.email };
    var response = await axios.post("/getTasksForEmployee", data);
    setAllTasks(response.data);
  };

  React.useEffect(() => {
    getAllTasks();
  },);

  return (
    <main className="modals">
      <button className="dropdown" onClick = {(event) => {
        event.preventDefault();
        props.setEmployeeDateShown(false);
      }}>
        <MdArrowDropDownCircle size={40} color={"#0361FF"}/>
      </button>
      <div className="employee-data">
        <div className="employee-task">
          <div className="h3">
            <h3>Employee's Tasks</h3>
          </div>
          <div className="forms">
            <form>
              <input
                type="date"
                value={today} className="button"
                onChange={(e) => setDateRequired(e.target.value)}
              />
            </form>
          </div>
          <div className="alltask">
            <AllTasks props={allTasks} dateFor={dateRequired} />
          </div>
          <div className="dategraph border" style={{"width":"500px","margin":"auto"}}>
            <TodayEmployee props={allTasks} forDate={dateRequired} />
          </div>
        </div>
        <div className="weekly border" style={{"margin":"auto"}}>
          <div style={{"width":"1000px","margin":"auto"}}>
            <WeeklyEmployeeBar props={allTasks} />
          </div>
        </div>
      </div>
    </main>
  );
}

export default Details;
