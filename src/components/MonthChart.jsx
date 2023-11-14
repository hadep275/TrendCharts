// MonthChart.js
import React, { useEffect, useRef } from "react";
import Chart from "chart.js/auto";
import "chartjs-adapter-date-fns";
import "../css/month.css";

const MonthChart = ({ title, data, timePeriod }) => {
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
              borderColor: "#265892",
              backgroundColor: "#00FFFF",
              pointBackgroundColor: "rgba(86, 45, 194, 0.2)",
              pointRadius: 2,
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
    <div className="analytic-box-month" style={{ backgroundColor: "#01013e" }}>
      <h2>{title}</h2>
      <canvas ref={chartRef}></canvas>
      <div className="middle-value-month">$288219.29</div>
    </div>
  );
};

export default MonthChart;
