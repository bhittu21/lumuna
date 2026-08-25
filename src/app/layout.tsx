import type { Metadata } from "next";
import { Inter, Instrument_Sans } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const instrument = Instrument_Sans({ subsets: ["latin"], variable: "--font-instrument" });

export const metadata: Metadata = {
  title: {
    template: '%s | LUMUNA',
    default: 'LUMUNA | Leading University Model United Nations Association',
  },
  description: "The premier youth diplomacy organization of Leading University, Sylhet. Fostering global decision-makers since 2016.",
  metadataBase: new URL('https://lumuna.org'), // Assuming a domain
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'LUMUNA | Leading University Model United Nations Association',
    description: "The premier youth diplomacy organization of Leading University, Sylhet.",
    url: 'https://lumuna.org',
    siteName: 'LUMUNA',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'LUMUNA Social Banner',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LUMUNA | Leading University Model United Nations Association',
    description: "The premier youth diplomacy organization of Leading University, Sylhet.",
    images: ['/og-image.jpg'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const orgJsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Leading University Model United Nations Association",
    "alternateName": "LUMUNA",
    "url": "https://lumuna.org",
    "logo": "https://lumuna.org/logo.png",
    "foundingDate": "2016",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Leading University Campus",
      "addressLocality": "Sylhet",
      "postalCode": "3100",
      "addressCountry": "BD"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+880 1777-847864",
      "contactType": "customer service",
      "email": "lumuna@lus.ac.bd",
      "areaServed": "BD",
      "availableLanguage": ["en", "bn"]
    },
    "sameAs": [
      "https://www.facebook.com/lumuna.lu"
    ]
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }}
        />
      </head>
      <body className={`${inter.variable} ${instrument.variable} font-sans antialiased bg-white text-foreground`} suppressHydrationWarning>
        <Navbar />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
