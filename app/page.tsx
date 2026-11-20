import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "NextBites — Quick Recipes by Cuisine & Prep Time",
  description:
    "Browse quick meals by cuisine and prep time, search recipes live, and view ingredients and step-by-step instructions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col bg-zinc-50 font-sans text-zinc-900 antialiased dark:bg-black dark:text-zinc-50">
        <header className="w-full border-b border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950">
          <div className="mx-auto flex max-w-3xl items-center justify-between px-8 py-4 sm:px-16">
            <Link
              href="/"
              className="text-lg font-bold tracking-tight text-black dark:text-zinc-50"
            >
              NextBites
            </Link>
            <Link
              href="/"
              className="text-sm font-medium text-zinc-600 hover:text-black dark:text-zinc-400 dark:hover:text-zinc-50"
            >
              Home
            </Link>
          </div>
        </header>
        {children}
      </body>
    </html>
  );
}
