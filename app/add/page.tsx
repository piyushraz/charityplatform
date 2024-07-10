"use client";

import BaseIcon from "app/_components/BaseIcon/BaseIcon";
import PageHeader from "app/_components/PageHeader";
import type { Charity } from "app/appContext";
import { useAppContext } from "app/appContext";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function HomePage() {
  const { watched, charities, addWatched, removeWatched } = useAppContext();

  const [search, setSearch] = useState("");
  const [filteredCharities, setFilteredCharities] = useState<Charity[]>([]);

  useEffect(() => {
    const filtered = charities.filter((charity) => {
      if (!search) return true;

      return charity.name.toLowerCase().includes(search.toLowerCase());
    });

    setFilteredCharities(filtered);
  }, [search, charities]);

  return (
    <PageHeader title="Search Charities">
      <div className="mb-10">
        <input
          className="search-input"
          placeholder="Search charities to follow..."
          onInput={(e) => setSearch(e.target.value)}
          value={search}
        />
      </div>

      {search.length < 1 && (
        <div className="flex flex-col items-center pb-12 text-center text-2xl text-neutral-500">
          <BaseIcon icon="question" height={200} />
          <span className="text-neutral-700">
            Please search a charity you support.
          </span>
        </div>
      )}

      {search.length >= 1 && filteredCharities.length < 1 && (
        <div className="py-10 text-center text-xl">
          No charities found. Try a different search.
        </div>
      )}

      <div className="flex flex-col gap-3 pb-10">
        {filteredCharities.map((charity) => {
          if (!charity) return null;

          return (
            <div
              key={charity.id}
              className="flex w-full items-center justify-between rounded-md border border-neutral-300 bg-neutral-50 p-6"
            >
              {charity.name}

              {!watched.includes(charity.id) ? (
                <button
                  className="h-8 w-8 rounded-md border border-green-400 bg-green-100 text-green-900"
                  onClick={() => {
                    if (watched.includes(charity.id)) return;
                    addWatched(charity.id);
                  }}
                >
                  +
                </button>
              ) : (
                <Link
                  className="flex h-8 w-8 items-center justify-center rounded-md border border-neutral-400 bg-neutral-100 text-neutral-900"
                  href={`/charity/${charity.id}`}
                >
                  {"->"}
                </Link>
              )}
            </div>
          );
        })}
      </div>
    </PageHeader>
  );
}
