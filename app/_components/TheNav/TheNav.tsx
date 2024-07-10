"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import BaseIcon from "../BaseIcon/BaseIcon";

export default function TheNav() {
  const pathname = usePathname();

  return (
    <div className="flex items-center justify-between bg-neutral-800 p-5 text-white">
      <Link
        href="/add"
        className={
          pathname === "/add"
            ? "rounded-full bg-white p-2 text-neutral-900"
            : "p-2"
        }
      >
        <BaseIcon icon="search" height={32} />
      </Link>
      <Link
        href="/compare"
        className={
          pathname === "/compare"
            ? "rounded-full bg-white p-2 text-neutral-900"
            : "p-2"
        }
      >
        <BaseIcon icon="chart" height={32} />
      </Link>
      <Link
        href="/"
        className={
          pathname === "/"
            ? "rounded-full bg-white p-2 text-neutral-900"
            : "p-2"
        }
      >
        <BaseIcon icon="home" height={32} />
      </Link>
      <Link
        href="/feed"
        className={
          pathname === "/feed"
            ? "rounded-full bg-white p-2 text-neutral-900"
            : "p-2"
        }
      >
        <BaseIcon icon="news" height={32} />
      </Link>
      {/* <Link href="/compare">
        <BaseIcon icon="chart" height={32} />
      </Link> */}
      <Link
        href="/chat"
        className={
          pathname === "/chat"
            ? "rounded-full bg-white p-2 text-neutral-900"
            : "p-2"
        }
      >
        <BaseIcon icon="chat" height={32} />
      </Link>
    </div>
  );
}
