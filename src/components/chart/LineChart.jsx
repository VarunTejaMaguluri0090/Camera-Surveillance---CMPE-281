import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Location", "Camera Failures", "Resolved Cameras", "Reported Crime", "Resolved Crimes", "Maintainnace Requets", "Resolved Requests"],
  ["SJSU", 500, 400, 1000, 800, 500, 450],
  ["Tower Lawn", 550, 400, 870, 580, 460, 400],
  ["Rec Center", 660, 1120, 1000, 800, 203, 200],
  ["MLK", 500, 400, 1000, 800, 500, 450],
  ["CVB Housing", 550, 400, 870, 580, 460, 400],
  ["Charle's Davidson", 500, 400, 1000, 800, 500, 450],
  ["Student Union", 550, 400, 870, 580, 460, 400],
];

export const options = {
  title: "Camera Detailed Information",
  curveType: "function",
  legend: { position: "bottom" },
};

export default function LineChart() {
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
