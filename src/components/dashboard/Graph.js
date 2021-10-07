import React, { useRef, useEffect, useState } from 'react';
import Chart from 'chart.js/auto';
import { useSelector, useDispatch } from 'react-redux';
import { useFirestoreConnect, isLoaded } from 'react-redux-firebase'
import { showEntry } from './../../actions/index'
import theme from '../../theme';
import PropTypes from "prop-types";

function Graph(props) {  
  const chartRef = useRef(null)
  const [entries, setEntries] = useState([])
  const [labels, setLabels] = useState([]);
  const [datapoints, setDatapoints] = useState([]);
  const { timespan } = props;

  const dispatch = useDispatch()
  const auth = useSelector(state => state.firebase.auth);

  useFirestoreConnect({collection: 'entries', storeAs: 'graphData', orderBy: ['timestamp', 'desc'], where: ['uuid','==',auth.uid], ...(timespan && {limit: timespan})} );
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
                return entries[index].timePosted;
              },
              afterLabel: function(tooltipItem) {
                let index = tooltipItem.dataIndex;
                return 'Keywords: '+ entries[index].keywords.map(keyword => keyword.text)
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
    </React.Fragment>
  );
}

Graph.propTypes = {
  timespan: PropTypes.number
}

export default Graph;