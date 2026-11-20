import "./globals.css";
import type { Metadata } from "next";
import Link from "next/link";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
 title: "NextBites | Discover & Browse Quick Recipes",
  description:
    "Browse curated recipes, search ingredients and dishes, and view step-by-step cooking details with NextBites.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-neutral-50 text-neutral-900">
        <header className="border-b border-neutral-200 bg-white">
          <nav className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4">
            <Link
              href="/"
              className="text-xl font-bold tracking-tight text-neutral-900"
            >
              NextBites
            </Link>
            <div className="flex items-center gap-6 text-sm font-medium text-neutral-600">
              <Link href="/" className="hover:text-neutral-900">
                Home
              </Link>
            </div>
          </nav>
        </header>
        <div className="flex-1">{children}</div>
      </body>
    </html>
  );
}