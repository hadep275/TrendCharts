import React, { useEffect, useRef } from "react";
import WeekChart from "./WeekChart";
import MonthChart from "./MonthChart";
import YearChart from "./YearChart";

const weekData = {
  labels: [
    new Date("2023-11-01"), new Date("2023-11-02"), new Date("2023-11-03"),
    new Date("2023-11-04"), new Date("2023-11-05"), new Date("2023-11-06"), new Date("2023-11-07")
  ],
  values: [50, 60, 70, 75, 80, 90, 85],
};

const monthData = {
  labels: [
    new Date("2023-11-01"), new Date("2023-11-08"), new Date("2023-11-15"), new Date("2023-11-22"),
  ],
  values: [200, 250, 230, 280],
};

const yearData = {
  labels: [
    new Date("2023-01-01"), new Date("2023-02-01"), new Date("2023-03-01"),
    new Date("2023-04-01"), new Date("2023-05-01"), new Date("2023-06-01"),
    new Date("2023-07-01"), new Date("2023-08-01"), new Date("2023-09-01"),
    new Date("2023-10-01"), new Date("2023-11-01"), new Date("2023-12-01"),
  ],
  values: [1200, 1500, 1400, 1600, 1800, 1700, 1900, 2000, 2200, 2400, 2300, 2600],
};

const AnalyticDataContainer = () => {
  return (
    <div className="analytic-container">
      <WeekChart title="This Week" data={weekData} timePeriod="week" />
      <MonthChart title="This Month" data={monthData} timePeriod="month" />
      <YearChart title="This Year" data={yearData} timePeriod="year" />
    </div>
  );
};

export default AnalyticDataContainer;