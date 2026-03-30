import type { Metadata } from "next";
import "./globals.css";
import { LangProvider } from "@/context/LangContext";
import { CartProvider } from "@/context/CartContext";
import { siteConfig } from "@/config/site";
import Navbar from "@/components/Navbar";
import Preloader from "@/components/Preloader";
import CookieBanner from "@/components/CookieBanner";
import SmoothScroll from "@/components/SmoothScroll";
import CartSidebar from "@/components/CartSidebar";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: { default: siteConfig.name, template: `%s | ${siteConfig.name}` },
  description: siteConfig.description,
  keywords: ["dates","dry fruits","medjool","ajwa","cashews","almonds","Coimbatore","Tamil Nadu","பேரீச்சம்பழம்"],
  openGraph: {
    title: siteConfig.name, description: siteConfig.description,
    url: siteConfig.url, siteName: siteConfig.name,
    images: [{ url: siteConfig.ogImage, width: 1200, height: 630 }],
    locale: "en_IN", type: "website",
  },
  twitter: { card: "summary_large_image", title: siteConfig.name, description: siteConfig.description },
  robots: { index: true, follow: true },
  alternates: { canonical: siteConfig.url },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,200..800&family=Hind+Madurai:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
      </head>
      <body>
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
