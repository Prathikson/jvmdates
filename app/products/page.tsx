import { constructMetadata } from "@/components/provider/SEO";
import ProductClient from "./ProductClient";

export const metadata = constructMetadata({
  title: "Premium Dates & Dry Fruits Coimbatore | JVM Dates Store",
  description: "Shop the highest quality Medjool Dates, Ajwa, and fresh Dry Fruits in Coimbatore. JVM Dates & Dry Fruits offers wholesale prices and premium quality guaranteed.",
  path: "/products",
});

export default function ProductsPage() {
  return <ProductClient />;
}