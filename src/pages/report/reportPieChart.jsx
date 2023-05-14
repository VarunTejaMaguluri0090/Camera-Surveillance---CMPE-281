import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Crimes", "Types (in millions)"],
  ["Theft", 13],
  ["Burglary", 26],
  ["Trespasser", 10],
  ["Harassing", 2],
  ["Assualt", 4],
  ["Vandalism", 3],
  ["Kidnapping", 4],
  ["Bullying", 5],
  ["Cyber bullying", 7],
  ["Homicide", 2],
  ["School Shooting", 0],
  ["Physical Abuse", 1]
];

export const options = {
  title: "Crime Analysis",
  legend: "Crime",
  pieSliceText: "label",
  slices: {
    4: { offset: 0.2 },
    12: { offset: 0.3 },
    14: { offset: 0.4 },
    15: { offset: 0.5 },
  },
};

export default function PieChart() {
  return (
    <Chart
      chartType="PieChart"
      data={data}
      options={options}
      width={"100%"}
      height={"400px"}
    />
  );
}
