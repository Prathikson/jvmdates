import { constructMetadata } from "@/components/provider/SEO";
import AboutClient from "./AboutClient";

// 1. This works now because this file is a Server Component (no "use client" here)
export const metadata = constructMetadata({
  title: "About JVM Dates & Dry Fruits - Our Quality Promise",
  description: "Learn how JVM Dates & Dry Fruits sources the freshest nuts and dates for the Coimbatore community. Our focus is quality and health.",
  path: "/about",
});

export default function AboutPage() {
  return <AboutClient />;
}