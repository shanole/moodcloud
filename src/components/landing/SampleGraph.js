import React, { useRef, useEffect } from 'react';
import Chart from 'chart.js/auto';
import theme from '../../theme';

const sampleData = [3, 5, 7, 6, 8, 9, 4];

const sampleLabels = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']

const sampleEntries = [
  {timePosted: 'Monday, January 1 2021', keywords: ['work','gym', 'appointment']},
  {timePosted: 'Tuesday, January 2 2021', keywords: ['work', 'thai food', 'hangout']},
  {timePosted: 'Wednesday, January 3 2021', keywords: ['work', 'gym','date','netflix']},
  {timePosted: 'Thursday, January 4 2021', keywords: ['work', 'happy hour']},
  {timePosted: 'Friday, January 5 2021', keywords: ['work','happy hour','weekend']},
  {timePosted: 'Saturday, January 6 2021', keywords: ['weekend','drinks','date']},
  {timePosted: 'Sunday, January 7 2021', keywords: ['brunch','sunday scaries','gym']},
]

function SampleGraph() {  
  const chartRef = useRef(null)

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');
    const testChart = new Chart(ctx, {
      type: "line",
      data: {
        labels: sampleLabels,
        datasets: [{ 
          data: sampleData,
          label: "Mood Rating",
          borderColor: theme.colors.teal,
          backgroundColor: theme.colors.teal,
          hoverBorderColor: theme.colors.lightPink,
          hoverBackgroundColor: theme.colors.lightPink,
          pointHoverRadius: 7,
          fill: false,
        }
        ],
      },
      options: { 
        plugins: {
          legend: {
            display: false
          },
          tooltip: {
            displayColors:false,
            backgroundColor: theme.colors.pink,
            titleFont: {size: 15},
            callbacks: {
              title: function(tooltipItem) {
                let index = tooltipItem[0].dataIndex
                return sampleEntries[index].timePosted;
              },
              afterLabel: function(tooltipItem) {
                let index = tooltipItem.dataIndex;
                return 'Keywords: '+ sampleEntries[index].keywords.map(keyword => keyword)
              }
            }
          }
        },
        scales: {
          yAxes: {
            beginAtZero: true,
            max: 10,
            title: {
              display: true,
              text: 'mood rating',
              align: 'end'
            }
          }
        },
        elements: {
          line: {
            tension: 0.25
          }
        },
        animations: {
          tension: {
            duration: 1000,
            easing: 'linear',
            from: 0,
            to: 0.5,
            loop: true,
          }
        }
      }
    });
    return () => testChart.destroy();
  })

  return (
    <React.Fragment>
      <canvas id="myCanvas" ref={chartRef}></canvas>
    </React.Fragment>
  );
}

export default SampleGraph;