import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Cookie Policy",
  description: `Cookie Policy for ${siteConfig.name}`,
};

const sections = [
  {
    heading: "1. What Are Cookies?",
    headingTa: "1. குக்கீகள் என்றால் என்ன?",
    body: "Cookies are small text files stored on your device when you visit a website. They help websites remember your preferences and improve your experience.",
    bodyTa: "குக்கீகள் ஒரு இணையதளத்தை பார்வையிடும்போது உங்கள் சாதனத்தில் சேமிக்கப்படும் சிறிய உரை கோப்புகள்.",
  },
  {
    heading: "2. How We Use Cookies",
    headingTa: "2. நாங்கள் குக்கீகளை எவ்வாறு பயன்படுத்துகிறோம்",
    body: "We use strictly necessary cookies (for the site to function), preference cookies (to remember your language and settings), and analytics cookies (to understand traffic patterns). We do not use advertising cookies.",
    bodyTa: "தளம் செயல்படுவதற்கான அவசியமான குக்கீகள், மொழி விருப்பங்களை நினைவில் வைக்கும் குக்கீகள் மற்றும் பகுப்பாய்வு குக்கீகளை மட்டும் பயன்படுத்துகிறோம்.",
  },
  {
    heading: "3. Session Cookies",
    headingTa: "3. செஷன் குக்கீகள்",
    body: "We use session cookies triggered once per session to store your cookie consent, language preference, and shopping cart. These cookies expire when you close your browser and contain no personal information.",
    bodyTa: "உங்கள் குக்கீ சம்மதம், மொழி விருப்பம் மற்றும் ஷாப்பிங் கார்ட்டை சேமிக்க செஷன் குக்கீகளை பயன்படுத்துகிறோம். உலாவியை மூடும்போது இவை காலாவதியாகும்.",
  },
  {
    heading: "4. Third-Party Cookies",
    headingTa: "4. மூன்றாம் தரப்பு குக்கீகள்",
    body: "We use Google Analytics cookies to understand how visitors use our site. This data is aggregated and anonymous. We do not share this with any advertising platforms.",
    bodyTa: "பார்வையாளர்கள் எங்கள் தளத்தை எவ்வாறு பயன்படுத்துகிறார்கள் என புரிந்துகொள்ள Google Analytics குக்கீகளை பயன்படுத்துகிறோம்.",
  },
  {
    heading: "5. Managing Cookies",
    headingTa: "5. குக்கீகளை நிர்வகிக்கவும்",
    body: "You can control or delete cookies through your browser settings. Disabling certain cookies may affect the functionality of our website. You can also opt out of Google Analytics at analytics.google.com/analytics/web/.",
    bodyTa: "உங்கள் உலாவி அமைப்புகள் மூலம் குக்கீகளை கட்டுப்படுத்தலாம் அல்லது நீக்கலாம். சில குக்கீகளை முடக்குவது எங்கள் இணையதளத்தின் செயல்பாட்டை பாதிக்கலாம்.",
  },
  {
    heading: "6. Contact",
    headingTa: "6. தொடர்பு",
    body: `For any questions about our cookie policy, please contact us at ${siteConfig.email}`,
    bodyTa: `குக்கீ கொள்கை பற்றிய கேள்விகளுக்கு ${siteConfig.email} இல் தொடர்பு கொள்ளுங்கள்.`,
  },
];

export default function CookiesPage() {
  return (
    <LegalPage
      title="Cookie Policy"
      titleTa="குக்கீ கொள்கை"
      lastUpdated="January 1, 2025"
      sections={sections}
    />
  );
}
