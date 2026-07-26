// @/lib/seo.ts
import { Metadata } from "next";
import { siteConfig } from "@/config/site";

interface SEOProps {
  title: string;
  description: string;
  path: string;
  image?: string;
}

export function constructMetadata({
  title,
  description,
  path,
  image = siteConfig.ogImage,
}: SEOProps): Metadata {
  return {
    title: `${title} | JVM Dates & Dry Fruits`,
    description,
    openGraph: {
      title: `${title} | JVM Dates & Dry Fruits Coimbatore`,
      description,
      url: `${siteConfig.url}${path}`,
      siteName: "JVM Dates & Dry Fruits",
      images: [{ url: image }],
      locale: "en_IN",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
      creator: "@jvmdates",
    },
    alternates: {
      canonical: `${siteConfig.url}${path}`,
    },
    keywords: [
      "Dates in Coimbatore",
      "Dry Fruits Coimbatore",
      "Best quality dry fruits Tamil Nadu",
      "Wholesale dates Coimbatore",
      "Fresh dry fruits online",
      "JVM Dates",
      "Dry fruit gift boxes Coimbatore",
    ],
    authors: [{ name: "JVM Dates & Dry Fruits" }],
    robots: "index, follow",
  };
}