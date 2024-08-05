import type { Metadata } from "next";

import AosIniter from "@app/components/aos-initer";
import Header from "@app/components/header";

import "./globals.css";

export const metadata: Metadata = {
  title: "ShineYup - Tailwind Config Builder",
  description: "Your modern tool to build Tailwind Configurations"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>): React.ReactElement {
  return (
    <html lang="en">
      <body className="bg-background text-green-2/75 text-base font-sans">
        <AosIniter />
        <Header />

        <div className="body-container">
          { children }
        </div>
      </body>
    </html>
  );
}
