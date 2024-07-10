"use client";

import Chart from "chart.js/auto";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

export function DataChart({
  data,
  labels,
  type = "bar",
}: {
  data: number[];
  type?: "bar" | "pie";
  labels: string[];
}) {
  const chartRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const chart = new Chart(chartRef.current!, {
      type,
      data: {
        labels,
        datasets: [
          {
            label: "Cost Breakdown",
            data,
            backgroundColor: [
              "rgb(255, 99, 132)",
              "rgb(54, 162, 235)",
              "rgb(255, 205, 86)",
            ],
          },
        ],
      },
      options: {
        // indexAxis: "y",
        // maintainAspectRatio: false,
        plugins: {
          legend: {
            display: type === "bar" ? false : true,
          },
        },
      },
    });

    return () => {
      chart.destroy();
    };
  }, [data, labels, type]);

  return (
    <div className="w-full">
      <canvas ref={chartRef} />
    </div>
  );
}
