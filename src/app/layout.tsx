import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import Script from "next/script";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { company } from "@/lib/site";
import "./globals.css";

// Google Tag Manager container ID (public — it ships in the page HTML).
const GTM_ID = "GTM-NZ2KM55S";

const SITE_URL = "https://www.ironwoodrentals.ca";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default:
      "Tent & Event Rentals in the Lower Mainland | Ironwood Film's & Event Rentals",
    template: "%s | Ironwood Film's & Event Rentals",
  },
  description:
    "Ironwood Film's & Event Rentals delivers tents, tables, chairs, linens, heaters, bars and film production gear across the Lower Mainland — Surrey, Langley, Abbotsford, Vancouver, Burnaby and beyond. One call, one crew, zero chasing. Call 778-385-1498 for a same-day quote.",
  keywords: [
    "tent rentals Surrey",
    "event rentals Langley",
    "wedding rentals Abbotsford",
    "party rentals Vancouver",
    "table and chair rentals Burnaby",
    "patio heater rentals Lower Mainland",
    "event rentals Lower Mainland",
    "film production rentals BC",
    "wedding rentals British Columbia",
    "pop up tent rentals",
  ],
  authors: [{ name: company.name }],
  openGraph: {
    type: "website",
    siteName: company.name,
    locale: "en_CA",
    title: "Tent & Event Rentals in the Lower Mainland",
    description:
      "Tents, tables, chairs, linens, heaters and film gear — delivered, set up and picked up across the Lower Mainland.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tent & Event Rentals in the Lower Mainland",
    description:
      "Tents, tables, chairs, linens, heaters and film gear — delivered, set up and picked up across the Lower Mainland.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

/** LocalBusiness structured data — helps Google show us for "near me" searches. */
function localBusinessJsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: company.name,
    url: SITE_URL,
    telephone: "+17783851498",
    email: company.email,
    description:
      "Tent, event and film production equipment rentals with delivery, setup and pickup across the Lower Mainland and British Columbia.",
    areaServed: [
      "Surrey",
      "Langley",
      "Abbotsford",
      "Vancouver",
      "Burnaby",
      "Coquitlam",
      "Richmond",
      "Delta",
      "Maple Ridge",
      "New Westminster",
      "Lower Mainland",
      "British Columbia",
    ].map((name) => ({ "@type": "City", name })),
    priceRange: "$$",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ],
        opens: "09:00",
        closes: "18:00",
      },
    ],
  };
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-white text-foreground">
        {/* Structured data for search engines */}
        <Script
          id="local-business-jsonld"
          type="application/ld+json"
          strategy="afterInteractive"
        >
          {JSON.stringify(localBusinessJsonLd())}
        </Script>

        {/* Google Tag Manager (noscript) — immediately after opening <body> */}
        <noscript>
          <iframe
            title="Google Tag Manager"
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        {/* Google Tag Manager */}
        <Script id="google-tag-manager" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','${GTM_ID}');`}
        </Script>

        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
