import React, { useEffect, useState } from "react";
import { Bar, Line, Pie } from "react-chartjs-2";
import Chart from "chart.js/auto";

import { useRef } from "react";
import './alertAnalysis.css'

const Graphs = ({ data }) => {
 

data = [
  { timestamp: "2023-04-01T10:23:00.000Z", alerts: 4, location: "Front Entrance" },
  { timestamp: "2023-04-02T09:18:00.000Z", alerts: 6, location: "Parking Lot" },
  { timestamp: "2023-04-03T12:45:00.000Z", alerts: 8, location: "Stairway" },
  { timestamp: "2023-04-04T08:30:00.000Z", alerts: 2, location: "Backdoor" },
  { timestamp: "2023-04-05T14:55:00.000Z", alerts: 3, location: "Lobby" },
]
 const lineChartRef = useRef();
  const barChartRef = useRef();
  const pieChartRef = useRef();
  const lineChart = useRef();
  const barChart = useRef();
  const pieChart = useRef();

  useEffect(() => {
    if (lineChart.current) {
      lineChart.current.destroy();
    }
    lineChart.current = new Chart(lineChartRef.current, {
      type: "line",
      data: {
        labels: data.map((d) => d.timestamp),
        datasets: [
          {
            label: "Number of Alerts",
            data: data.map((d) => d.alerts),
            fill: false,
            borderColor: "rgb(75, 192, 192)",
            tension: 0.1,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: "top",
          },
        },
      },
    });
  }, [data]);

  useEffect(() => {
    if (barChart.current) {
      barChart.current.destroy();
    }
    barChart.current = new Chart(barChartRef.current, {
      type: "bar",
      data: {
        labels: data.map((d) => d.location),
        datasets: [
          {
            label: "Number of Alerts",
            data: data.map((d) => d.alerts),
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(153, 102, 255, 0.2)",
            ],
            borderColor: [
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: "top",
          },
        },
      },
    });
  }, [data]);

  useEffect(() => {
    if (pieChart.current) {
      pieChart.current.destroy();
    }
    pieChart.current = new Chart(pieChartRef.current, {
      type: "pie",
      data: {
        labels: data.map((d) => d.location),
        datasets: [
          {
            label: "Number of Alerts",
            data: data.map((d) => d.alerts),
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",

              "rgba(153, 102, 255, 0.2)",
            ],
            borderColor: [
              "rgba(255, 99, 132, 1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
            ],
            borderWidth: 1,
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: "top",
          },
        },
      },
    });
  }, [data]);

  return (
    <div class="Graphs">
      <div>
        <canvas ref={lineChartRef} id="line-chart"></canvas>
      </div>
      <div>
        <canvas ref={barChartRef} id="bar-chart"></canvas>
      </div>
      <div>
        <canvas ref={pieChartRef} id="pie-chart"></canvas>
      </div>
    </div>
  );
};

export default Graphs;



// const sampleData = [
//   { timestamp: "2023-04-01T10:23:00.000Z", alerts: 4, location: "Front Entrance" },
//   { timestamp: "2023-04-02T09:18:00.000Z", alerts: 6, location: "Parking Lot" },
//   { timestamp: "2023-04-03T12:45:00.000Z", alerts: 8, location: "Stairway" },
//   { timestamp: "2023-04-04T08:30:00.000Z", alerts: 2, location: "Backdoor" },
//   { timestamp: "2023-04-05T14:55:00.000Z", alerts: 3, location: "Lobby" },
// ];

// const Graphs = () => {
//   const [lineChart, setLineChart] = useState(null);
//   const [barChart, setBarChart] = useState(null);
//   const [pieChart, setPieChart] = useState(null);

//   useEffect(() => {
//     // Line Chart
//     const lineCtx = document.getElementById("line-chart");
//     setLineChart(
//       new Chart(lineCtx, {
//         type: "line",
//         data: {
//           labels: sampleData.map((d) => new Date(d.timestamp).toLocaleDateString()),
//           datasets: [
//             {
//               label: "Number of Alerts",
//               data: sampleData.map((d) => d.alerts),
//               backgroundColor: "rgba(54, 162, 235, 0.2)",
//               borderColor: "rgba(54, 162, 235, 1)",
//               borderWidth: 1,
//             },
//           ],
//         },
//         options: {
//           responsive: true,
//           plugins: {
//             legend: {
//               display: false,
//             },
//           },
//           scales: {
//             x: {
//               title: {
//                 display: true,
//                 text: "Date",
//               },
//             },
//             y: {
//               title: {
//                 display: true,
//                 text: "Number of Alerts",
//               },
//               suggestedMin: 0,
//             },
//           },
//         },
//       })
//     );

//     // Bar Chart
//     const barCtx = document.getElementById("bar-chart");
//     setBarChart(
//       new Chart(barCtx, {
//         type: "bar",
//         data: {
//           labels: sampleData.map((d) => d.location),
//           datasets: [
//             {
//               label: "Number of Alerts",
//               data: sampleData.map((d) => d.alerts),
//               backgroundColor: "rgba(54, 162, 235, 0.2)",
//               borderColor: "rgba(54, 162, 235, 1)",
//               borderWidth: 1,
//             },
//           ],
//         },
//         options: {
//           responsive: true,
//           plugins: {
//             legend: {
//               display: false,
//             },
//           },
//           scales: {
//             x: {
//               title: {
//                 display: true,
//                 text: "Location",
//               },
//             },
//             y: {
//               title: {
//                 display: true,
//                 text: "Number of Alerts",
//               },
//               suggestedMin: 0,
//             },
//           },
//         },
//       })
//     );

//     const pieCtx = document.getElementById("pie-chart");
//     setBarChart(new Chart(pieCtx, {
//             type: "pie",
//             data: {
//               labels: sampleData.map((d) => d.location),
//               datasets: [
//                 {
//                   label: "Number of Alerts",
//                   data: sampleData.map((d) => d.alerts),
//                   backgroundColor: ["#ff6384", "#36a2eb", "#ffce56", "#4bc0c0", "#9966ff"],
//                   borderWidth: 1,
//                 },
//               ],
//             },
//             options: {
//               responsive: true,
//               plugins: {
//                 legend: {
//                   position: "right",
//                 },
//               },
//             },
//           })
//         );

//     }, []);

//     return (
//     <div>
//     <h2>Line Chart</h2>
//     <canvas id="line-chart" />

//     <h2>Bar Chart</h2>
//   <canvas id="bar-chart" />

//   <h2>Pie Chart</h2>
//   <canvas id="pie-chart" />
// </div>);
// // }, []);

// // return (
// // <div>
// //   <h2>Line Chart</h2>
// //   <canvas id="line-chart" />

// //   <h2>Bar Chart</h2>
// //   <canvas id="bar-chart" />

// //   <h2>Pie Chart</h2>
// //   <canvas id="pie-chart" />
// // </div>
// // );
// };

// export default Graphs;