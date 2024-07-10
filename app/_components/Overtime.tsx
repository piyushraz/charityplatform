"use client";

import { useAppContext } from "app/appContext";
import Chart from "chart.js/auto";
import { useEffect, useRef } from "react";

import * as Utils from "./utils";

export function TimeChart({ id }: { id: number }) {
  const chartRef = useRef<HTMLCanvasElement>(null);
  const { charities } = useAppContext();
  const labels = Utils.months({ count: 3 });
  const colors = [
    Utils.CHART_COLORS.red,
    Utils.CHART_COLORS.blue,
    Utils.CHART_COLORS.green,
    Utils.CHART_COLORS.yellow,
    Utils.CHART_COLORS.orange,
  ];

  useEffect(() => {
    const charity = charities.find((charity) => charity.id === id);

    const data = {
      labels: labels,
      datasets: [
        {
          label: "Admin",
          data: charity?.financial.map((financial) => {
            return financial.admin;
          }),
          borderColor: colors[0],
          backgroundColor: Utils.transparentize(colors[0], 0.5),
          yAxisID: "y",
        },
        {
          label: "Fundraising",
          data: charity?.financial.map((financial) => {
            return financial.fundraising;
          }),

          borderColor: colors[1],
          backgroundColor: Utils.transparentize(colors[1], 0.5),
          yAxisID: "y",
        },
        {
          label: "Cause",
          data: charity?.financial.map((financial) => {
            return financial.cause;
          }),
          borderColor: colors[2],
          backgroundColor: Utils.transparentize(colors[2], 0.5),
          yAxisID: "y",
        },
      ],

      // datasets: [
      //   {
      //     label: "Dataset 1",
      //     data: Utils.numbers(NUMBER_CFG),
      //     borderColor: Utils.CHART_COLORS.red,
      //     backgroundColor: Utils.transparentize(Utils.CHART_COLORS.red, 0.5),
      //     yAxisID: "y",
      //   },
      //   {
      //     label: "Dataset 2",
      //     data: Utils.numbers(NUMBER_CFG),
      //     borderColor: Utils.CHART_COLORS.blue,
      //     backgroundColor: Utils.transparentize(Utils.CHART_COLORS.blue, 0.5),
      //     yAxisID: "y1",
      //   },
      // ],
    };

    const config = {
      type: "line",
      data: data,
      options: {
        responsive: true,
        interaction: {
          mode: "index",
          intersect: false,
        },
        stacked: false,
        plugins: {
          title: {
            display: false,
          },
        },
        scales: {
          y: {
            type: "linear",
            display: true,
            position: "left",
          },
        },
      },
    };

    const chart = new Chart(chartRef.current!, config);

    return () => {
      chart.destroy();
    };
  }, [labels]);

  return (
    <div className="w-full">
      <canvas ref={chartRef} />
    </div>
  );
}
