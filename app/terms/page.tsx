import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `Terms of Service for ${siteConfig.name}`,
};

const sections = [
  {
    heading: "1. Acceptance of Terms",
    headingTa: "1. விதிமுறைகளை ஏற்றுக்கொள்வது",
    body: "By accessing and using the JVM Dates & Dry Fruits website, you accept and agree to be bound by these Terms of Service. If you do not agree, please do not use our services.",
    bodyTa: "JVM Dates & Dry Fruits இணையதளத்தை அணுகுவதன் மூலம், இந்த சேவை விதிமுறைகளை ஏற்கிறீர்கள். நீங்கள் ஒப்புக்கொள்ளவில்லை என்றால், எங்கள் சேவைகளை பயன்படுத்த வேண்டாம்.",
  },
  {
    heading: "2. Products and Pricing",
    headingTa: "2. பொருட்கள் மற்றும் விலை",
    body: "All prices are listed in Indian Rupees (INR) and include applicable taxes. We reserve the right to change prices at any time. Product images are for illustration purposes; slight variations in appearance may occur due to natural variations in the product.",
    bodyTa: "அனைத்து விலைகளும் இந்திய ரூபாயில் (INR) பட்டியலிடப்பட்டுள்ளன. விலைகளை எந்த நேரத்திலும் மாற்றும் உரிமை எங்களுக்கு உள்ளது.",
  },
  {
    heading: "3. Orders and Payment",
    headingTa: "3. ஆர்டர்கள் மற்றும் கட்டணம்",
    body: "Orders are confirmed upon successful payment. We accept major credit/debit cards, UPI, and net banking. All payments are processed securely. We reserve the right to cancel orders in case of pricing errors or stock unavailability.",
    bodyTa: "வெற்றிகரமான கட்டணத்தில் ஆர்டர்கள் உறுதிப்படுத்தப்படும். அனைத்து கட்டணங்களும் பாதுகாப்பாக செயலாக்கப்படும்.",
  },
  {
    heading: "4. Delivery",
    headingTa: "4. விநியோகம்",
    body: "We aim to dispatch within 24 hours of order confirmation. Delivery timelines are estimates and may vary due to factors beyond our control, including carrier delays and public holidays.",
    bodyTa: "ஆர்டர் உறுதிப்படுத்தலுக்கு 24 மணி நேரத்திற்குள் அனுப்பும் திட்டம். விநியோக காலக்கெடுக்கள் மதிப்பீடுகள் மட்டுமே.",
  },
  {
    heading: "5. Returns and Refunds",
    headingTa: "5. திரும்பக் கொடுத்தல் மற்றும் பணத்திரும்பல்",
    body: "We accept returns for unopened products within 7 days of delivery. Damaged or incorrect products will be replaced at no cost. Refunds are processed within 5–7 business days. Perishable goods cannot be returned unless defective.",
    bodyTa: "விநியோகத்திலிருந்து 7 நாட்களுக்குள் திறக்கப்படாத பொருட்களை திரும்ப ஏற்கிறோம். பணத்திரும்பல் 5–7 வேலை நாட்களுக்குள் செயலாக்கப்படும்.",
  },
  {
    heading: "6. Intellectual Property",
    headingTa: "6. அறிவுசார் சொத்துரிமை",
    body: "All content on this website, including text, graphics, logos, and images, is the property of JVM Dates & Dry Fruits and protected by applicable intellectual property laws. You may not reproduce or distribute any content without prior written permission.",
    bodyTa: "இந்த இணையதளத்தில் உள்ள அனைத்து உள்ளடக்கங்களும் JVM Dates & Dry Fruits சொத்து மற்றும் பொருந்தக்கூடிய அறிவுசார் சொத்துரிமை சட்டங்களால் பாதுகாக்கப்படுகின்றன.",
  },
  {
    heading: "7. Governing Law",
    headingTa: "7. ஆளும் சட்டம்",
    body: "These terms are governed by the laws of India. Any disputes shall be subject to the exclusive jurisdiction of courts in Chennai, Tamil Nadu.",
    bodyTa: "இந்த விதிமுறைகள் இந்திய சட்டங்களால் நிர்வகிக்கப்படும். எந்த சர்ச்சைகளும் சென்னை, தமிழ்நாட்டில் உள்ள நீதிமன்றங்களுக்கு உட்பட்டிருக்கும்.",
  },
];

export default function TermsPage() {
  return (
    <LegalPage
      title="Terms of Service"
      titleTa="சேவை விதிமுறைகள்"
      lastUpdated="January 1, 2025"
      sections={sections}
    />
  );
}
