import React from "react";
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS } from "chart.js/auto"

function BarChart(){
    console.log("in bar");
    var WorkingData = [10, 6, 4, 6, 7];
    var MeetingDAta = [2, 3, 1, 3, 4];
    var BreakDAta = [3, 3, 1, 2, 2];
    return(
        <div>
            <Bar
                data={{
                    labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                    datasets: [
                        {
                            label: 'Working',
                            data: WorkingData,
                            backgroundColor: '#29BF12'
                        },
                        {
                            label: 'Meeting',
                            data: MeetingDAta,
                            backgroundColor: '#0361FF'
                        },
                        {
                            label: 'Break',
                            data: BreakDAta,
                            backgroundColor: '#F21B3F'
                        }
                    ],
                }}
                options={{
                    scales: {
                        xAxis: {
                            stacked: true
                        },
                        yAxis: {
                            stacked: true
                        }
                    }
                }}  
            />
        </div>
    )
}
export default BarChart;