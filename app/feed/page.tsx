"use client";

import BaseIcon from "app/_components/BaseIcon/BaseIcon";
import PageHeader from "app/_components/PageHeader";
import { Report } from "app/_components/Report";
import type { Financial } from "app/appContext";
import { useAppContext } from "app/appContext";
import { useEffect, useState } from "react";

export default function FeedPage() {
  const { watched, charities } = useAppContext();

  const [reports, setReports] = useState<
    {
      id: number;
      name: string;
      report: Financial;
    }[]
  >([]);

  useEffect(() => {
    // pull the report out of charities and flatten it with the charity id and name

    const reports = charities
      .filter((charity) => watched.includes(charity.id))
      .flatMap((charity) => {
        // add all the reports to the array
        return charity.financial.flatMap((report) => {
          return {
            id: charity.id,
            name: charity.name,
            report,
          };
        });
      });

    // sort by date
    const orderByDate = reports.sort((a, b) => {
      if (a.report.date > b.report.date) return -1;
      if (a.report.date < b.report.date) return 1;
      return 0;
    });

    setReports(orderByDate);
  }, [watched]);

  return (
    <PageHeader title="Charity Updates" hasX={false}>
      {watched.length < 1 && (
        <div>You are not watching any charities. Please add one</div>
      )}

      <div className="flex flex-col">
        {reports.map((report) => {
          return <Report key={report.report.date} report={report} />;
        })}
      </div>
    </PageHeader>
  );
}
