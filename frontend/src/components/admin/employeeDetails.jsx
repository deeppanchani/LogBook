import React from "react";
import axios from "axios";

import AllTasks from "../Employee/TasksTable";
import TodayEmployee from "../Employee/todayEmployee";
import WeeklyEmployeeBar from "../Employee/weeklyEmployeeBar";

function Details(props){
    var today = new Date();

    var [dateRequired, setDateRequired] = React.useState(today);

    // var email = props.email;
    var [allTasks, setAllTasks] = React.useState([]);
    const getAllTasks = async() => {
        var data = {email : props.email};
        var response = await axios.post("/getTasksForEmployee", data);
        setAllTasks(response.data);
    }

    React.useEffect(()=> {
        getAllTasks();
    }, [])


    return (
        <div>
            <form>
                <input type="date" value = {today}
                onChange = {(e) => setDateRequired(e.target.value)}/>
            </form>
           <AllTasks props = {allTasks} dateFor = {dateRequired}/>
           <TodayEmployee props = {allTasks} forDate = {dateRequired} />
            <WeeklyEmployeeBar props = {allTasks} />
        </div>
    )
}

export default Details;