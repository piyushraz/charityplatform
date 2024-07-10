"use client";

import BaseIcon from "app/_components/BaseIcon/BaseIcon";
import { useAppContext } from "app/appContext";
import { format, parseISO } from "date-fns";
import Link from "next/link";
import { notFound } from "next/navigation";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Page({ params }: { params: { id: string } }) {
  const { charities, addMessageToCharity } = useAppContext();

  const searchParams = useSearchParams();
  const report = searchParams.get("report");

  // Find the post for the current page.
  const charity = charities.find((post) => post.id === Number(params.id));

  const [message, setMessage] = useState("");

  async function onSubmit() {
    if (!charity) return;

    addMessageToCharity(charity.id, {
      text: message,
      date: new Date().toISOString(),
      direction: "in",
    });

    await new Promise((resolve) => setTimeout(resolve, 300));

    addMessageToCharity(charity.id, {
      text: "Thanks for the question, one of our representatives will look into it and get back to you with the information requested as soon as possible.",
      date: new Date().toISOString(),
      direction: "out",
    });

    setMessage("");
  }

  useEffect(() => {
    if (report && charity) {
      setMessage(
        `Hi, regarding the ${charity.financial.find(
          (f) => f.id === Number(report),
        )?.name} (https://${window.location.hostname}/charity/${
          charity.id
        }/${report}),`,
      );
    }
  }, [searchParams]);

  // 404 if the post does not exist.
  if (!charity) notFound();

  return (
    <div>
      <header className="mb-8 flex items-center gap-3 border-b border-neutral-400 bg-neutral-50 px-6 py-6">
        <Link href="/" className="pb-1">
          <BaseIcon icon="back" height={20} />
        </Link>
        <h1 className="text-xl font-semibold">{charity.name} Message</h1>
      </header>

      <div className="fixed bottom-28 left-4 right-4 z-10">
        <textarea
          className="block w-full break-words rounded-md border border-neutral-400 bg-white p-4 pr-16 text-sm shadow-md"
          placeholder="Hello..."
          onInput={(e) => setMessage(e.target.value)}
          rows={2}
          value={message}
        ></textarea>

        <button
          className="absolute bottom-2 right-2 top-2 z-10 block rounded-md border border-green-400 bg-green-200 p-2 text-green-800"
          onClick={() => onSubmit()}
        >
          <BaseIcon icon="right-arrow" height={22} />
        </button>
      </div>

      <section className="px-6 pb-20">
        {charity.messages.map((message) => {
          return (
            <div key={message.date + message.text} className="mb-5">
              <div
                className={`flex items-center ${
                  message.direction === "in" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`flex items-center gap-2 rounded-md border ${
                    message.direction === "in"
                      ? `ml-8 border-blue-300 bg-blue-50 text-blue-900`
                      : "mr-8 border-green-300 bg-green-50 text-green-900"
                  } p-2 px-4  font-medium `}
                >
                  {message.text}
                </div>
              </div>

              <div
                className={`mt-1 text-sm  font-medium text-neutral-400 ${
                  message.direction === "in" ? "text-end" : ""
                }`}
              >
                {format(parseISO(message.date), "LLL d")}
              </div>
            </div>
          );
        })}
      </section>
    </div>
  );
}
