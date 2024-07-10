"use client";

import { useAppContext } from "app/appContext";
import Chart from "chart.js/auto";
import { useEffect, useRef } from "react";

import * as Utils from "./utils";

export function CompareChart({ id }: { id: string }) {
  const chartRef = useRef<HTMLCanvasElement>(null);
  const { watched, charities } = useAppContext();

  const DATA_COUNT = 7;

  const labels = Utils.months({ count: 3 });

  const firstTwoCharities = charities.slice(0, 2);
  const colors = [
    Utils.CHART_COLORS.red,
    Utils.CHART_COLORS.blue,
    Utils.CHART_COLORS.green,
    Utils.CHART_COLORS.yellow,
    Utils.CHART_COLORS.orange,
  ];

  useEffect(() => {
    const data = {
      labels: labels,
      datasets: firstTwoCharities.map((charity, i) => {
        return {
          label: charity.name,
          data: charity.financial.map((financial) => {
            return financial.admin;
          }),
          borderColor: colors[i],
          backgroundColor: Utils.transparentize(colors[i], 0.5),
          yAxisID: "y",
        };
      }),

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
      <canvas id={id} ref={chartRef} />
    </div>
  );
}
