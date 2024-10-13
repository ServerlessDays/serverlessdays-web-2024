import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

import { Mascottes } from "@/components/mascottes";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.serverlessdays.io"),
  title: "ServerlessDays - One Day. One Track. One Community.",
  description:
    "A global conference series dedicated to building and connecting the serverless community. Locally organized, non-profit, and uniquely tailored to each location.",
  icons: {
    icon: "/favicon.png",
  },
  authors: [
    {
      name: "Simone Lusenti",
      url: "https://x.com/Lanzone31",
    },
  ],
  alternates: {
    canonical: "https://www.serverlessdays.io",
  },
  openGraph: {
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "ServerlessDays - One Day. One Track. One Community.",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased font-mono min-h-screen`}
      >
        <header className="container mx-auto px-4 py-6 border-b-0 border-black flex flex-col gap-12">
          <Navbar />
          <Mascottes />
        </header>

        {children}

        <Mascottes small />
        <Footer />
      </body>
    </html>
  );
}
