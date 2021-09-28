import React, { useRef, useEffect, useState } from 'react';
import Chart from 'chart.js/auto';
import { useSelector } from 'react-redux';
import { useFirestoreConnect, isLoaded, isEmpty } from 'react-redux-firebase'
import { useDispatch } from 'react-redux'
import { showEntry } from './../actions/index'

function Graph() {  
  const chartRef = useRef(null)
  const [entries, setEntries] = useState([])
  const [labels, setLabels] = useState([]);
  const [datapoints, setDatapoints] = useState([]);
  const [timespan, setTimespan] = useState(7);
  const dispatch = useDispatch()

  useFirestoreConnect({collection: 'entries', storeAs: 'graphData', orderBy: ['timestamp', 'desc'], ...(timespan && {limit: timespan})} );

  const graphData = useSelector(state => state.firestore.ordered.graphData);
  
  useEffect(() => {
    if (isLoaded(graphData)) {
      let reversedData = [...graphData].reverse()
      setEntries(reversedData);
      setLabels(reversedData.map(entry => {return entry.timePosted.slice(0,3)}))
      setDatapoints(reversedData.map(entry => {return entry.rating}))
    }
  }, [setLabels, setDatapoints, graphData])
  
  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');
    const testChart = new Chart(ctx, {
      type: "line",
      data: {
        labels: labels,
        datasets: [{ 
          data: datapoints,
          label: "Mood Rating",
          borderColor: "#3e95cd",
          backgroundColor: "#7bb6dd",
          fill: false,
        }
        ],
      },
      options: { 
        plugins: {
          title: {
              display: true,
              fullSize: true,
              text: 'Mood Chart',
              font: {
                size: 30
              }
          },
          legend: {
            display: false
          },
          // the little box thing?
          tooltip: {
            callbacks: {
              title: function(tooltipItem) {
                let index = tooltipItem[0].dataIndex
                return entries[index].timePosted;
              },
              afterLabel: function(tooltipItem) {
                let index = tooltipItem.dataIndex;
                return entries[index].keywords.map(keyword => keyword.text)
              }
            }
          }
        },
        scales: {
          yAxes: {
            beginAtZero: true
          }
        },
        onClick: function clickHandler(evt) {
          const points = testChart.getElementsAtEventForMode(evt, 'nearest', { intersect: true }, true);
      
          if (points.length) {
            dispatch(showEntry(entries[points[0].index]))
          }
       }
      }
    });
    return () => testChart.destroy();
  })

  return (
    <React.Fragment>
      <canvas id="myCanvas" ref={chartRef}></canvas>
      <button onClick={() => setTimespan(7)}>Past week</button>
      <button onClick={() => setTimespan(30)}>Past 30 days</button>
    </React.Fragment>
  );
}

export default Graph;