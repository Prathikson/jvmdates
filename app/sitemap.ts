import { MetadataRoute } from "next";
import { siteConfig } from "@/config/site";
import { products } from "@/data/products"; // Ensure this path is correct

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = siteConfig.url;

  // 1. Static Pages
  const staticPages: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: new Date(), changeFrequency: "daily", priority: 1 },
    { url: `${baseUrl}/about`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/products`, lastModified: new Date(), changeFrequency: "daily", priority: 0.9 },
    { url: `${baseUrl}/contact`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
  ];

  // 2. Dynamic Product Pages (CRITICAL for SEO)
  // const productPages: MetadataRoute.Sitemap = products.map((product) => ({
  //   url: `${baseUrl}/products/${product.id}`, // or product.slug
  //   lastModified: new Date(),
  //   changeFrequency: "weekly",
  //   priority: 0.8,
  // }));

  return [...staticPages];
}