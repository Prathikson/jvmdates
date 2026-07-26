import type { Metadata, Viewport } from "next";
import "./globals.css";
// 1. Optimize Fonts (Much faster than <link>)
import { Bricolage_Grotesque, Hind_Madurai } from 'next/font/google';
import { LangProvider } from "@/context/LangContext";
import { CartProvider } from "@/context/CartContext";
import { siteConfig } from "@/config/site";
import Navbar from "@/components/Navbar";
import Preloader from "@/components/Preloader";
import CookieBanner from "@/components/CookieBanner";
import SmoothScroll from "@/components/SmoothScroll";
import CartSidebar from "@/components/CartSidebar";

const bricolage = Bricolage_Grotesque({ 
  subsets: ['latin'], 
  variable: '--font-bricolage' 
});

const hindMadurai = Hind_Madurai({ 
  weight: ['300', '400', '500', '600', '700'],
  subsets: ['tamil', 'latin'],
  variable: '--font-hind'
});

// 2. Enhanced JSON-LD for Local Coimbatore SEO
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Store",
  "name": "JVM Dates & Dry Fruits",
  "alternateName": "JVM Dry Fruits Coimbatore",
  "description": "Premium quality Dates and Dry Fruits in Coimbatore. Best prices for Medjool, Ajwa, and high-quality nuts.",
  "url": siteConfig.url,
  "logo": `${siteConfig.url}/images/logo.svg`,
  "image": `${siteConfig.url}/images/store-front.jpg`, // Add a store image if you have one
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "YOUR_STREET_ADDRESS", // REPLACE THIS
    "addressLocality": "Coimbatore",
    "addressRegion": "TN",
    "postalCode": "641001", // REPLACE THIS
    "addressCountry": "IN"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "11.0168",
    "longitude": "76.9558"
  },
  "hasMap": "YOUR_GOOGLE_MAPS_LINK", // Add your Google Maps link here
  "openingHoursSpecification": {
    "@type": "OpeningHoursSpecification",
    "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
    "opens": "09:00",
    "closes": "21:00"
  },
  "priceRange": "₹₹",
  "areaServed": "Coimbatore",
  "telephone": "+91-XXXXXXXXXX" // REPLACE WITH YOUR PHONE
};

// 3. Viewport settings (Modern Next.js way)
export const viewport: Viewport = {
  themeColor: "#8B0000", // Use your brand's primary color (e.g., Deep Red/Maroon)
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: { 
    default: `JVM Dates & Dry Fruits | Best Quality in Coimbatore`, 
    template: `%s | JVM Dates & Dry Fruits` 
  },
  description: "Fresh and premium quality Dates and Dry Fruits in Coimbatore. Best pricing for Ajwa, Medjool, Almonds, and Cashews. Order online for delivery in Tamil Nadu.",
  icons: {
       icon: [
      { url: "/logo.svg", type: "image/svg+xml" },
    ],
    shortcut: "/images/logo.svg",
    apple: "/images/logo.svg",
  },
  keywords: [
    "JVM Dates", "Dates in Coimbatore", "Dry Fruits Coimbatore", 
    "Wholesale dry fruits Coimbatore", "Best dates shop Tamil Nadu",
    "Fresh Almonds Coimbatore", "Medjool dates online India", 
    "பேரீச்சம்பழம்", "உலர் பழங்கள்"
  ],
  openGraph: {
    title: "JVM Dates & Dry Fruits - Best Quality & Pricing in Coimbatore", 
    description: "Discover fresh, premium dates and dry fruits. JVM Dates offers the best quality nuts and imported dates at unbeatable prices in Coimbatore.",
    url: siteConfig.url, 
    siteName: "JVM Dates & Dry Fruits",
    images: [{ url: siteConfig.ogImage, width: 1200, height: 630, alt: "JVM Dates Store Coimbatore" }],
    locale: "en_IN", 
    type: "website",
  },
  twitter: { 
    card: "summary_large_image", 
    title: "JVM Dates & Dry Fruits Coimbatore", 
    description: "Premium Dates and Dry Fruits at the best prices." 
  },
  robots: { index: true, follow: true },
  alternates: { canonical: siteConfig.url },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${bricolage.variable} ${hindMadurai.variable}`}>
      <head>
        {/* Font links are removed because we use next/font above */}
        <link rel="icon" href="/images/logo.svg" type="image/svg+xml" />
      </head>
      <body className="antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <LangProvider>
          <CartProvider>
            <SmoothScroll>
              <Preloader />
              <Navbar />
              <CartSidebar />
              <main>{children}</main>
              <CookieBanner />
            </SmoothScroll>
          </CartProvider>
        </LangProvider>
      </body>
    </html>
  );
}