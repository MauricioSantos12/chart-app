import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS } from "chart.js/auto";
import './barChart.scss'

function BarChart({ chartData }) {
  return (
    <section className="container-chart" id="bar">
      <Bar data={chartData} />
    </section>
  );
}

export default BarChart;
