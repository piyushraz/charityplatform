"use client";

import React from "react";

import BaseIcon from "./BaseIcon/BaseIcon";

export default function PageHeader({
  title,
  children,
  hasX = true,
  hasBack = false,
}: {
  title: string;
  children: React.ReactNode;
  hasX?: boolean;
  basBack?: boolean;
}) {
  return (
    <div>
      <div
        className={`flex w-full items-center gap-3 border-b border-stone-200 bg-stone-50 px-6 py-6 text-center text-stone-900 ${
          hasX ? "mb-8" : ""
        }`}
      >
        {hasBack && (
          <button onClick={() => history.back()}>
            <BaseIcon icon="back" height={20} />
          </button>
        )}
        <h3 className="text-2xl font-semibold">{title}</h3>
      </div>

      <div className={hasX ? "px-6" : ""}>{children}</div>
    </div>
  );
}
