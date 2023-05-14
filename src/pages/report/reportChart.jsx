import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Location", "Camera Failures", "Resolved Cameras", "Active Cameras", "InActive Cameras"],
  ["SJSU", 12, 10, 57, 6],
  ["Tower Lawn", 5, 22, 27, 18],
  ["Rec Center", 10, 20, 60, 8],
  ["MLK", 9, 10, 73, 7],
  ["CVB Housing", 20, 25, 60, 22],
  ["Charle's Davidson", 10, 23, 51, 4],
  ["Student Union", 17, 16, 21, 2],
];

export const options = {
  title: "Camera Detailed Information",
  curveType: "function",
  legend: { position: "bottom" },
};

export default function ReportChart() {
  return (
    <Chart
      chartType="LineChart"
      width="100%"
      height="400px"
      data={data}
      options={options}
    />
  );
}
