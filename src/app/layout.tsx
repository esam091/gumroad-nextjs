import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./(sidebar)/header";
import { DarkModeProvider } from "./dark-mode-toggle";

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
      <body className={`flex flex-col ${inter.className} h-[100vh]`}>
        <DarkModeProvider>{children}</DarkModeProvider>
      </body>
    </html>
  );
}
