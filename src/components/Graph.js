import React, { useRef, useEffect, useState } from 'react';
import Chart from 'chart.js/auto';

const chartConfig = { 
  plugins: {
    title: {
        display: true,
        fullSize: true,
        text: 'Custom Chart Title',
        font: {
          size: 30
        }
    },
    legend: {
      display: false
    }
  }
}

function Graph() {
  const chartRef = useRef(null)
  
  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');
    const testChart = new Chart(ctx, {
      type: "line",
      data: {
        labels: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        datasets: [{ 
          data: [86,114,106,106,107,111,133],
          label: "Total",
          borderColor: "#3e95cd",
          backgroundColor: "#7bb6dd",
          fill: false,
        }
        ],
      },
      options: chartConfig
    });
    return () => testChart.destroy();
  })
  
  return (
    <React.Fragment>
      <canvas id="myCanvas" ref={chartRef}></canvas>
    </React.Fragment>
  );
}

export default Graph;