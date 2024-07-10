"use client";

import BaseIcon from "app/_components/BaseIcon/BaseIcon";
import { CompareChart } from "app/_components/CompareBar";
import PageHeader from "app/_components/PageHeader";
import { DataChart } from "app/_components/PieChart";
import { useAppContext } from "app/appContext";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function FeedPage() {
  const { watched, charities } = useAppContext();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, [charities, watched]);

  const reports = ["Q1 2023", "Q2 2023", "Q3 2023"];

  return (
    <PageHeader title="Charity Spending" hasX={false}>
      <div className="border-b border-neutral-300 p-6">
        <p>
          <span className="font-bold">Cause:</span> Deployed directly to mission
        </p>
        <p>
          <span className="font-bold">Admin:</span> Executive oversight costs
        </p>
        <p>
          <span className="font-bold">Fundraising:</span> Marketing and
          fundraising costs
        </p>
      </div>

      {/* {mounted &&
        watched.map((id) => {
          return (
            <div
              key={id}
              className="border-b border-neutral-300 p-6 text-center"
            >
              <h1 className="mb-8 flex items-center justify-between">
                <div className="text-center text-xl font-semibold">
                  {charities[id].name}
                </div>

                <Link
                  className="flex items-center gap-1 text-sm text-neutral-400"
                  href={`/charity/${id}`}
                >
                  View Charity
                  <BaseIcon icon="right-arrow" height={16} />
                </Link>
              </h1>
              <DataChart
                type="pie"
                data={[
                  charities[id].financial[charities[id].financial.length - 1]
                    ?.fundraising || 0,
                  charities[id].financial[charities[id].financial.length - 1]
                    ?.admin || 0,
                  charities[id].financial[charities[id].financial.length - 1]
                    ?.cause || 0,
                ]}
                labels={["Fundraising", "Admin", "Cause"]}
              />
            </div>
          );
        })} */}

      {[2, 1, 0].map((i) => {
        return (
          <div
            key={i}
            className="border-b border-neutral-300 p-2 py-8 text-center"
          >
            <h1 className="mb-8 flex items-center justify-between px-4 text-lg font-semibold">
              {reports[i]}
            </h1>
            <CompareChart reportI={i} />
          </div>
        );
      })}
    </PageHeader>
  );
}
