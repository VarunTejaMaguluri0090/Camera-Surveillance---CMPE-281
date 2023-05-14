import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Date", "Active Users", "InActive Users", "New User Requests"],
  ["03-04-2023", 52, 10, 2],
  ["09-04-2023", 54, 12, 4],
  ["12-04-2023", 54, 12, 4],
  ["19-04-2023", 55, 13, 5],
  ["22-04-2023", 57, 13, 7],
  ["03-05-2023", 60, 15, 8],
  ["06-05-2023", 63, 17, 8],
  ["10-05-2023", 67, 20, 9],
];

export const options = {
  chart: {
    title: "Users Information",
    subtitle: "Active Users, InActive Users, and New User Requests",
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
