import React from "react";
import { Pie } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";

function PieChart(props) {
  var current = props.props;

  var work = current[0];
  var meet = current[1];
  var recess = current[2];

  return (
    <div>
      <Pie
        data={{
          labels: ["Working", "Meeting", "Break"],
          datasets: [
            {
              label: "stat graph",
              data: [work, meet, recess],
              backgroundColor: ["#29BF12", "#0361FF", "#F21B3F"],
            },
          ],
        }}
      />
    </div>
  );
}
export default PieChart;
