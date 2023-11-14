// YearChart.js
import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import "chartjs-adapter-date-fns";
import "../css/year.css";

const YearChart = ({ title, data, timePeriod }) => {
  const chartRef = useRef(null);
  const chartInstanceRef = useRef(null);

  useEffect(() => {
    if (chartRef.current) {
      if (chartInstanceRef.current) {
        chartInstanceRef.current.destroy();
      }

      const ctx = chartRef.current.getContext("2d");
      const newChart = new Chart(ctx, {
        type: "line",
        data: {
          labels: data.labels,
          datasets: [
            {
              label: title,
              data: data.values,
              fill: true,
              borderColor: "#9D0759",
              borderWidth: 1.5,
              backgroundColor: "#FF69B4",
              pointBackgroundColor: "rgba(75, 12, 192, 1)",
              pointRadius: 1,
              cubicInterpolationMode: 'monotone',
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
          scales: {
            x: {
              display: false,
              type: "time",
            },
            y: {
              display: false,
              beginAtZero: true,
            },
          },
          plugins: {
            legend: {
              display: false,
            },
          },
        },
      });

      chartInstanceRef.current = newChart;
    }
  }, [title, data, timePeriod]);

  return (
    <div className="analytic-box-year" style={{ backgroundColor: "#01013e" }}>
      <h2>{title}</h2>
      <canvas ref={chartRef}></canvas>
      <div className="middle-value-year">$288219.29</div>
    </div>
  );
};

export default YearChart;
