import React from "react";
import PieChart from "./PieChart";

function DateEmployee(props) {
  var data = props.props;

  var work = 0;
  var meet = 0;
  var recess = 0;
  var today = new Date();
  var dd = String(today.getDate()).padStart(2, "0");
  var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  var yyyy = today.getFullYear();

  today = yyyy + "-" + mm + "-" + dd;
  for (var i = 0; i < data.length - 1; i++) {
    var current = data[i];
    var dateloc = current.start.toString();
    dateloc = dateloc.slice(0, 10);
    if (dateloc == today) { 
      if (current.type == "Meeting") {
        meet += current.duration;
      } else if (current.type == "Work") {
        work += current.duration;
      } else {
        recess += current.duration;
      }
    }
  }

  if (work === 0 && meet === 0 && recess === 0) {
    return <div>" "</div>;
  }
  var toPass = [work, meet, recess];
  return <PieChart props={toPass} />;
}

export default DateEmployee;
