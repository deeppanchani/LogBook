import React from "react";
import PieChart from "./PieChart";

function TodayEmployee(props) {
  var data = props.props;
  var today = props.forDate;
  console.log("in today " + today);

  var work = 0;
  var meet = 0;
  var recess = 0;
  if(typeof (today) != "string"){
    var dd = String(today.getDate()).padStart(2, "0");
    var mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
    var yyyy = today.getFullYear();

    today = yyyy + "-" + mm + "-" + dd;
  }
  // var today = new Date();
  

  // console.log(today);

  // console.log("today is " + today);
  for (var i = 0; i < data.length; i++) {
    // console.log("we in here ");
    var current = data[i];
    // console.log(current);
    var dateloc = current.start.toString();
    dateloc = dateloc.slice(0, 10);
    // console.log("first is " + dateloc)
    if (dateloc == today) {
      if (current.type == "Meeting") {
        meet += current.duration;
      } else if (current.type == "Work") {
        work += current.duration;
      } else {
        recess += current.duration;
      }
      // console.log("we in equal");
    }
    // console.log(typeof dateloc)
    // if(dateloc ==)
    // if()
    // console.log(current);
  }

  // console.log("in bar");
  if (work == 0 && meet == 0 && recess == 0) {
    return <div>" "</div>;
  }
  var toPass = [work, meet, recess];
  return <PieChart props={toPass} />;
}

export default TodayEmployee;
