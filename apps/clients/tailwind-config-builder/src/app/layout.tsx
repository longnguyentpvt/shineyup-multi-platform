import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import Header from "@app/components/header";

const inter = Inter({ subsets: ["latin"] });

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
      <body className={ inter.className }>
        <Header />
        { children }
      </body>
    </html>
  );
}
