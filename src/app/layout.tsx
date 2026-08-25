import type { Metadata } from "next";
import { Inter, Instrument_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const instrument = Instrument_Sans({ subsets: ["latin"], variable: "--font-instrument" });

export const metadata: Metadata = {
  title: "LUMUNA | Leading University Model United Nations Association",
  description: "The premier youth diplomacy organization of Leading University, Sylhet.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${instrument.variable} font-sans antialiased`}>
        <Navbar />
        <main className="min-h-screen pt-24 pb-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
