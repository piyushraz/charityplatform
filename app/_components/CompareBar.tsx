"use client";

import { useAppContext } from "app/appContext";
import Chart from "chart.js/auto";
import { useEffect, useRef } from "react";

import * as Utils from "./utils";

export function CompareChart({ reportI }: { reportI: number }) {
  const chartRef = useRef<HTMLCanvasElement>(null);
  const { watched, charities } = useAppContext();

  const firstTwoCharities = charities.slice(0, 2);
  const colors = [
    Utils.CHART_COLORS.red,
    Utils.CHART_COLORS.blue,
    Utils.CHART_COLORS.green,
    Utils.CHART_COLORS.yellow,
    Utils.CHART_COLORS.orange,
  ];

  const watchedToCharities = watched.map((id) => {
    return charities.find((charity) => charity.id === id)!;
  });

  useEffect(() => {
    const data = {
      labels: ["Admin", "Fundraising", "Cause"],
      datasets: watchedToCharities.map((charity, i) => {
        return {
          label: charity.name,
          data: [
            charity.financial[reportI].admin,
            charity.financial[reportI].fundraising,
            charity.financial[reportI].cause,
          ],
          borderColor: colors[i],
          backgroundColor: Utils.transparentize(colors[i], 0.5),
        };
      }),
    };

    const config = {
      type: "bar",
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
  });

  return (
    <div className="w-full">
      <canvas ref={chartRef} />
    </div>
  );
}
