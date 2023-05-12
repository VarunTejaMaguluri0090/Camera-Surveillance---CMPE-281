import React from "react";
import { Chart } from "react-google-charts";

export const data = [
  ["Crimes", "Types (in millions)"],
  ["Theft", 130],
  ["Burglary", 830],
  ["Trespasser", 1000],
  ["Harassing", 230],
  ["Assualt", 460],
  ["Vandalism", 300],
  ["Kidnapping", 380],
  ["Bullying", 55],
  ["Cyber bullying", 50],
  ["Homicide", 20],
  ["School Shooting", 33],
  ["Physical Abuse", 15]
];

export const options = {
  title: "Crime Analysis Year 2016-2023",
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
