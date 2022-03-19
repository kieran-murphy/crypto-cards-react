import React, { useEffect, useRef, useState } from "react";
import { historyOptions } from "../chartConfigs/chartConfigs";
import { Chart } from "chart.js";
import coinGecko from "../apis/coinGecko";

export const HistoryChart = ({ coinData, coin }) => {
  const chartRef = useRef();
  useEffect(() => {
    if (chartRef && chartRef.current && coin) {
      const chartInstance = new Chart(chartRef.current, {
        type: "line",
        data: {
          datasets: [
            {
              label: `${coin.name} price`,
              data: coinData.year,
              backgroundColor: "rgba(174, 305, 194, 0.5)",
              borderColor: "rgba(174, 305, 194, 0.4)",
              pointRadius: 0,
              borderWidth: 1,
            },
          ],
        },
        options: {
          ...historyOptions,
        },
      });
    }
  });

  return <canvas ref={chartRef} id="myChart"></canvas>;
};
