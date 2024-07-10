"use client";

import BaseIcon from "app/_components/BaseIcon/BaseIcon";
import { TimeChart } from "app/_components/Overtime";
import { Report } from "app/_components/Report";
import { useAppContext } from "app/appContext";
import { Basic } from "next/font/google";
import Link from "next/link";
import { notFound } from "next/navigation";
import { useRouter } from "next/navigation";

export default function Page({ params }: { params: { id: string } }) {
  const { charities, removeWatched } = useAppContext();
  const router = useRouter();

  // Find the post for the current page.
  const charity = charities.find((post) => post.id === Number(params.id));

  function onTrash() {
    if (!charity) return;

    removeWatched(charity.id);

    router.push("/");
  }

  // 404 if the post does not exist.
  if (!charity) notFound();

  return (
    <div>
      <header className="mb-8 flex items-center justify-between gap-3 border-b border-neutral-400 bg-neutral-50 px-6 py-6">
        <div className="flex items-center gap-3">
          <Link href="/" className="pb-1">
            <BaseIcon icon="back" height={20} />
          </Link>

          <h1 className="text-xl font-semibold">{charity.name}</h1>
        </div>

        <button onClick={() => onTrash()}>
          <BaseIcon icon="trash" height={20} />
        </button>
      </header>

      <section className="mb-8 px-6">
        <p className="text-xl">{charity.mission}.</p>
      </section>

      <section className="mt-8 flex items-center justify-between border-y border-neutral-300 p-4">
        <Link
          href={`/chat/${charity.id}`}
          className="flex items-center gap-2 rounded-md border border-blue-300 bg-blue-50 p-2 px-4 text-lg font-medium text-blue-900"
        >
          Chat
          <BaseIcon icon="chat" height={22} />
        </Link>

        <Link
          href={`/survey`}
          className="flex items-center gap-2 rounded-md border border-orange-300 bg-orange-50 p-2 px-4 text-lg font-medium text-orange-900"
        >
          Survey
          <BaseIcon icon="chat" height={22} />
        </Link>

        <Link
          href={`/external`}
          className="flex items-center gap-2 rounded-md border border-green-300 bg-green-50 p-2 px-4 text-lg font-medium text-green-900"
        >
          Donate
          <BaseIcon icon="money" height={22} />
        </Link>
      </section>

      <div className="border-b border-neutral-300 py-8">
        <h1 className="mb-4 px-6 text-lg font-semibold">
          Budget Allocation Overtime
        </h1>
        <TimeChart id={charity.id} />
      </div>

      <section>
        {charity.financial.map((financial) => (
          <Report
            report={{ name: charity.name, id: charity.id, report: financial }}
            key={financial.id}
          />
        ))}
      </section>
    </div>
  );
}
