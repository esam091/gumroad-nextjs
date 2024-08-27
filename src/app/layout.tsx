import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./(sidebar)/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Gumroad Next.js",
  description: "A Next.js UI implementation of Gumroad's website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`flex flex-col ${inter.className} h-[100vh] bg-gray-100`}>
       {children}
      </body>
    </html>
  );
}
