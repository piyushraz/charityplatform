"use client";

import BaseIcon from "app/_components/BaseIcon/BaseIcon";
import PageHeader from "app/_components/PageHeader";
import { useAppContext } from "app/appContext";
import { format, parseISO } from "date-fns";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function ChatPage() {
  const { watched, charities } = useAppContext();

  const [search, setSearch] = useState("");

  return (
    <PageHeader title="Messages" hasX={false}>
      {watched.length < 1 && (
        <div>You are not watching any charities. Please add one</div>
      )}

      <div className="flex flex-col">
        {watched.map((id) => {
          const charity = charities.find((c) => c.id === id);

          if (
            search &&
            !charity?.name.toLowerCase().includes(search.toLowerCase())
          )
            return null;

          if (!charity) return null;

          return (
            <Link
              href={`/chat/${id}`}
              key={id}
              className="flex w-full gap-5 overflow-hidden border-b border-neutral-300 p-4 py-7"
            >
              <Image
                src={charity.img}
                width={100}
                height={100}
                alt="charity logo"
                className="h-16 w-16 shrink-0 rounded-full object-cover shadow-md"
              />

              <div className="w-full pt-2">
                <div className="mb-2 flex items-center justify-between text-sm">
                  <div className="font-semibold">{charity.name}</div>

                  <div className="flex items-center gap-2 text-neutral-400">
                    {format(parseISO(charity.messages[0].date), "LLL d")}

                    <BaseIcon icon="right-arrow" height={16} />
                  </div>
                </div>

                <div className="w-full overflow-hidden">
                  <div className="w-full overflow-hidden overflow-ellipsis text-neutral-600">
                    {charity.messages[0].text}
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </PageHeader>
  );
}
