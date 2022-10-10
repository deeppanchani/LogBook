import React from "react";
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS } from "chart.js/auto"

function BarChart(props){
    var data = props.props;
    return(
        <div>
            <Bar
                data={{
                    labels: data[0],
                    datasets: [
                        {
                            label: 'Working',
                            data: data[1],
                            backgroundColor: '#29BF12'
                        },
                        {
                            label: 'Meeting',
                            data: data[2],
                            backgroundColor: '#0361FF'
                        },
                        {
                            label: 'Break',
                            data: data[3],
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