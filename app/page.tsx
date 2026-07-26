import { constructMetadata } from "@/components/provider/SEO";
import HomeClient from "./HomeClient";

export const metadata = constructMetadata({
  title: "Fresh & Premium Dates and Dry Fruits in Coimbatore",
  description: "Get the best pricing and highest quality Dates and Dry Fruits in Coimbatore. JVM Dates & Dry Fruits offers fresh Almonds, Walnuts, Cashews and Imported Dates.",
  path: "/",
});

export default function HomePage() {
  return <HomeClient />;
}