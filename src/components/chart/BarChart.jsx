import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Year", "Alerts", "Resolved Alerts", "Pending Alerts"],
  ["2016", 1000, 400, 200],
  ["2017", 1170, 460, 250],
  ["2018", 660, 1120, 300],
  ["2019", 1030, 540, 350],
  ["2020", 1500, 1000, 500],
  ["2021", 900, 600, 350],
  ["2022", 1300, 300, 100],
  ["2023", 789, 700, 89],
];

export const options = {
  chart: {
    title: "Alerts Status",
    subtitle: "Alerts, Resolved, and Pending: 2016-2023",
  },
};

export default function BarChart() {
  return (
    <Chart
      chartType="Bar"
      width="100%"
      height="400px"
      data={data}
      options={options}
     //fill="#8884d8"
    />
  );
}
