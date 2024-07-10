"use client";

import BaseIcon from "app/_components/BaseIcon/BaseIcon";
import { DataChart } from "app/_components/PieChart";
import { useAppContext } from "app/appContext";
import Link from "next/link";
import { notFound } from "next/navigation";

export default function Page({
  params,
}: {
  params: { id: string; report: string };
}) {
  const { charities } = useAppContext();

  // Find the post for the current page.
  const charity = charities.find((post) => post.id === Number(params.id));
  const report = charity?.financial.find((report) => {
    return report.id === Number(params.report);
  });

  // 404 if the post does not exist.
  if (!report || !charity) notFound();

  return (
    <div>
      <header className="mb-8 flex items-center gap-3 border-b border-neutral-400 bg-neutral-50 px-6 py-6">
        <Link href="/" className="pb-1">
          <BaseIcon icon="back" height={20} />
        </Link>
        <h1 className="text-xl font-semibold">
          {charity.name} - {report.name}
        </h1>
      </header>

      <section className="px-6 pb-10">
        <div className="col-span-12 mt-6">
          <h1 className="mb-4 text-xl font-medium">Cost Breakdown</h1>
          <div className="rounded-md border border-neutral-200 bg-neutral-50 p-5">
            <DataChart
              id={"s"}
              type={"pie"}
              data={[report.fundraising, report.admin, report.cause]}
              labels={["Fundraising", "Admin", "Cause"]}
            />
          </div>
        </div>

        <div className="col-span-12 mt-10">
          <h1 className="mb-4 text-xl font-medium">Summary</h1>
          <div className="rounded-md border border-neutral-200 bg-neutral-50 p-5">
            {report.summary}
          </div>
        </div>
        <div className="col-span-12 mt-10">
          <h1 className="mb-4 text-xl font-medium">Full Report</h1>
          <div className="rounded-md border border-neutral-200 bg-neutral-50 p-5">
            {report.fullReport}
          </div>
        </div>

        <div className="mt-10 flex border-t border-neutral-300 pt-10">
          <p>If you have any questions, please message the charity directly.</p>
          <Link
            href={`/chat/${charity.id}?report=${report.id}`}
            className="inline-flex items-center gap-2 rounded-md border border-blue-300 bg-blue-50 p-2 px-4 font-medium text-blue-900"
          >
            Chat
            <BaseIcon icon="chat" height={22} />
          </Link>
        </div>
      </section>
    </div>
  );
}
