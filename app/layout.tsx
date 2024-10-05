import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

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
  title: "ServerlessDays - One Day. One Track. One Community.",
  description: "ServerlessDays is a series of community-driven events that bring together developers to explore the latest advancements in serverless computing.",
  icons: {
    icon: "/favicon.ico",
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
  
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
