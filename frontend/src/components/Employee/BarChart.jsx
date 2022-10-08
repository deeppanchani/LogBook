import React from "react";
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS } from "chart.js/auto"

function BarChart(){
    console.log("in bar");
    return(
        <div>
            <Pie 
                data={{
                    labels: ['Working', 'Meeting', 'Break'],
                    datasets: [
                        {
                            label: 'stat graph',
                            data: [5, 15, 10],
                            backgroundColor: ['#29BF12', '#0361FF', '#F21B3F']
                        },
                    ],
                }}
            />
        </div>
    )
}
export default BarChart;