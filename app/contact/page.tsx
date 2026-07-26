import { constructMetadata } from "@/components/provider/SEO";
import ContactClient from "./ContactClient";

export const metadata = constructMetadata({
  title: "Contact JVM Dates - Visit our Coimbatore Store",
  description: "Visit JVM Dates & Dry Fruits in Coimbatore or call us for wholesale orders. Get the best prices on fresh dry fruits today.",
  path: "/contact",
});

export default function ContactPage() {
  return <ContactClient />;
}