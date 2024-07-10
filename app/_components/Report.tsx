import type { Financial } from "app/appContext";
import Link from "next/link";

import BaseIcon from "./BaseIcon/BaseIcon";
import { DataChart } from "./PieChart";

export function Report({
  report,
}: {
  report: {
    id: number;
    name: string;
    report: Financial;
  };
}) {
  return (
    <div
      key={report.id}
      className="block w-full border-b border-neutral-300 p-4 py-7"
    >
      <div className="grid grid-cols-12">
        <div className="col-span-12">
          <div className="mb-4 inline-block rounded-full border border-neutral-300 bg-neutral-100 px-2 text-sm font-medium">
            {report.name}
          </div>
          <div className="mb-1 flex items-center justify-between">
            <div className="text-lg font-semibold">{report.report.name}</div>
          </div>

          <p>{report.report.summary}</p>
        </div>

        <div className="col-span-12 mt-6">
          <DataChart
            data={[
              report.report.fundraising,
              report.report.admin,
              report.report.cause,
            ]}
            labels={["Fundraising", "Admin", "Cause"]}
          />
        </div>
      </div>

      <Link
        className="mt-6 flex items-center gap-2 text-neutral-400"
        href={`/charity/${report.id}/${report.report.id}`}
      >
        Read More
        <BaseIcon icon="right-arrow" height={20} />
      </Link>
    </div>
  );
}
