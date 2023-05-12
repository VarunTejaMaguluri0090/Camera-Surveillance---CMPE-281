import React from "react";
import "./reportSection.css";

const ReportSection = ({ title, data }) => {
return (
<div className="report-section-container">
<h2 className="heading-main">{title}</h2>
<div className="report-section-data">
{data.map((item, index) => (
<div key={index} className="report-section-data-item">
{Object.entries(item).map(([label, value], i) => (
<div key={i}>
<span className="report-section-data-label">{label}: </span>
<span className="report-section-data-value">{value}</span>
</div>
))}
</div>
))}
</div>
</div>
)};