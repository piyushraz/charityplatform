import "./_styles/main.scss";

import { Metadata } from "next";
import { Inter } from "next/font/google";
import React from "react";

import TheNav from "./_components/TheNav/TheNav";
import { AppProvider } from "./appContext";

const title = "Charity Platform";
const description = "A platform to connect with your charities";

export const metadata: Metadata = {
  title,
  description,
};

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  weight: ["400", "500", "600", "700", "800"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable}`}>
      <body
        className="flex flex-col overflow-auto"
        style={{
          position: "fixed",
          height: "100%",
          width: "100%",
          top: 0,
        }}
      >
        <AppProvider>
          <main className="flex w-full grow flex-col overflow-auto">
            {children}
          </main>

          <TheNav />
        </AppProvider>
      </body>
    </html>
  );
}
