"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import PageHeader from "./_components/PageHeader";
import { useAppContext } from "./appContext";

export default function HomePage() {
  const { watched, charities } = useAppContext();

  const [search, setSearch] = useState("");

  return (
    <PageHeader title="Watched Charities">
      <div className="mb-6">
        <input
          className="search-input"
          placeholder="Search my watchlist..."
          onInput={(e) => setSearch(e.target.value)}
          value={search}
        />
      </div>

      {watched.length < 1 && (
        <div>You are not watching any charities. Please add one</div>
      )}

      <div className="flex flex-col gap-3 pb-8">
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
              href={`/charity/${id}`}
              key={id}
              className="block w-full rounded-md border border-neutral-300 bg-neutral-50 shadow-sm"
            >
              <div className="flex items-stretch">
                <Image
                  src={charity.img}
                  width={100}
                  height={100}
                  alt="charity logo"
                  className="h-32 w-32 shrink-0 object-cover"
                />

                <div className="p-4">
                  <div className="text-lg font-semibold">{charity.name}</div>
                  <p className="text-sm text-neutral-600">{charity.mission}</p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </PageHeader>
  );
}
