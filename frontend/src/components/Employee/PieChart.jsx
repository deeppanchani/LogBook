import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

function PieChart(props) {
  var current = props.props;

  var ar = ["#29BF12", "#0361FF", "#F21B3F"];
  var lab = ["Working", "Meeting", "Break"];
  var work = current[0];
  var meet = current[1];
  var recess = current[2];

  if (work + meet + recess == 0) {
    ar = ["#9F8772", "#9F8772", "#9F8772"];
    lab = ["No Data"];
    work = 0;
    meet = 0;
    recess = 1;
  }


  return (
    <div>
      <Pie
        data={{
          labels: lab,
          datasets: [
            {
              label: "stat graph",
              data: [work, meet, recess],
              backgroundColor: ar,
            },
          ],
        }}
      />
    </div>
  );
}
export default PieChart;
