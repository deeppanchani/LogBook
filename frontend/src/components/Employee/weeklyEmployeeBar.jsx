import React from "react";
import BarChart from "./StackedBarChart";

function WeeklyEmployeeBar(props){
    var data = props.props;
    var totalWork = []
    var totalMeet = []
    var totalBreak = []
    var pastDates = []
    for(var j=6;j>=0;j--){
        var work = 0;
        var meet = 0;
        var recess = 0;
        var today = new Date();
        today.setDate(today.getDate() - j);
        var dd = String(today.getDate()).padStart(2, "0");
        var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
        var yyyy = today.getFullYear();

        today = yyyy + "-" + mm + "-" + dd;

        for (var i = 0; i < data.length; i++) {
            var current = data[i];
            var dateloc = current.start.toString();
            dateloc = dateloc.slice(0, 10);
            if (dateloc === today) {
                if (current.type === "Meeting") {
                meet += current.duration;
                } else if (current.type === "Work") {
                work += current.duration;
                } else {
                recess += current.duration;
                }
            }
        }
        totalBreak.push(recess);
        totalMeet.push(meet);
        totalWork.push(work);
        pastDates.push(today);
    }
    var toPass= [pastDates, totalWork, totalMeet, totalBreak]
    return (
        <BarChart props = {toPass}/>
    )
}

export default WeeklyEmployeeBar;