import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Link from "next/link";
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
  title: "NextJS Data Fetch",
  description: "A Next.js app demonstrating data fetching and parallel routes",
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
      <body className="min-h-full flex flex-col bg-gray-50">
        <header className="bg-white border-b border-gray-200 shadow-sm">
          <nav className="max-w-4xl mx-auto px-6 h-16 flex items-center gap-8">
            <Link
              href="/"
              className="text-gray-800 font-semibold text-lg hover:text-blue-600 transition-colors"
            >
              Home
            </Link>
            <Link
              href="/users"
              className="text-gray-600 font-medium hover:text-blue-600 transition-colors"
            >
              Users
            </Link>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
