import "@/styles/globals.css";

import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";

import { TRPCReactProvider } from "@/trpc/react";
import Navbar from "./_components/Header";
import Footer from "./_components/Footer";

export const metadata: Metadata = {
  title: "MBF PETROVSKI",
  description: "Protect your home with professional gutter installation services. We specialize in durable, custom-fit gutters that enhance drainage and prevent water damage. Contact us today for a free quote!",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://mbf-petrovski.com",
    title: "MBF PETROVSKI",
    description: "Protect your home with professional gutter installation services. We specialize in durable, custom-fit gutters that enhance drainage and prevent water damage. Contact us today for a free quote!",
    images: [
      {
        url: "https://mbf-petrovski.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "MBF PETROVSKI",
      },
    ],
    siteName: "MBF PETROVSKI",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${GeistSans.variable}`}>
      <body>
        <Navbar />
        <TRPCReactProvider>{children}</TRPCReactProvider>
        <Footer />
      </body>
    </html>
  );
}
