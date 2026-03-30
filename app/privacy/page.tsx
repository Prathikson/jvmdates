import type { Metadata } from "next";
import { siteConfig } from "@/config/site";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy Policy for ${siteConfig.name}`,
};

const sections = [
  {
    heading: "1. Information We Collect",
    headingTa: "1. நாங்கள் சேகரிக்கும் தகவல்கள்",
    body: "We collect information you provide directly, such as name, email address, phone number, and shipping address when you place an order or contact us. We also collect usage data and cookies to improve your experience on our website.",
    bodyTa: "நீங்கள் ஆர்டர் செய்யும் போது அல்லது எங்களை தொடர்பு கொள்ளும் போது நேரடியாக வழங்கும் தகவல்களான பெயர், மின்னஞ்சல், தொலைபேசி எண் மற்றும் ஷிப்பிங் முகவரி சேகரிக்கிறோம்.",
  },
  {
    heading: "2. How We Use Your Information",
    headingTa: "2. உங்கள் தகவல்களை நாங்கள் எவ்வாறு பயன்படுத்துகிறோம்",
    body: "We use your information to process orders and deliver products, communicate about your orders, improve our website and services, send promotional communications (with your consent), and comply with legal obligations.",
    bodyTa: "ஆர்டர்களை செயலாக்க, பொருட்களை விநியோகிக்க, உங்கள் ஆர்டர்களைப் பற்றி தொடர்பு கொள்ள, சட்டப்பூர்வ கடமைகளை பூர்த்தி செய்ய உங்கள் தகவல்களை பயன்படுத்துகிறோம்.",
  },
  {
    heading: "3. Cookies",
    headingTa: "3. குக்கீகள்",
    body: "We use session cookies to remember your preferences and shopping cart. These expire when you close your browser. We use analytics cookies to understand how visitors use our site. You can opt out via our Cookie Settings.",
    bodyTa: "உங்கள் விருப்பங்கள் மற்றும் ஷாப்பிங் கார்ட்டை நினைவில் வைக்க செஷன் குக்கீகளை பயன்படுத்துகிறோம். பார்வையாளர்கள் எங்கள் தளத்தை எவ்வாறு பயன்படுத்துகிறார்கள் என புரிந்துகொள்ள பகுப்பாய்வு குக்கீகளை பயன்படுத்துகிறோம்.",
  },
  {
    heading: "4. Data Sharing",
    headingTa: "4. தரவு பகிர்வு",
    body: "We do not sell your personal data. We may share your information with trusted third-party service providers (such as delivery partners and payment processors) to fulfil your orders, under strict confidentiality agreements.",
    bodyTa: "நாங்கள் உங்கள் தனிப்பட்ட தரவை விற்கவில்லை. உங்கள் ஆர்டர்களை நிறைவேற்ற நம்பகமான மூன்றாம் தரப்பினர் (விநியோக கூட்டாளர்கள் மற்றும் கட்டண செயலாக்கிகள்) உடன் மட்டுமே பகிர்கிறோம்.",
  },
  {
    heading: "5. Data Security",
    headingTa: "5. தரவு பாதுகாப்பு",
    body: "We implement industry-standard security measures to protect your personal information. All payment transactions are encrypted using SSL technology. However, no method of transmission over the Internet is 100% secure.",
    bodyTa: "உங்கள் தனிப்பட்ட தகவலை பாதுகாக்க தொழில்துறை-நிலை பாதுகாப்பு நடவடிக்கைகளை செயல்படுத்துகிறோம். அனைத்து கட்டண பரிவர்த்தனைகளும் SSL தொழில்நுட்பத்தைப் பயன்படுத்தி மறைகுறியாக்கப்படுகின்றன.",
  },
  {
    heading: "6. Your Rights",
    headingTa: "6. உங்கள் உரிமைகள்",
    body: "You have the right to access, correct, or delete your personal data. You may also opt out of marketing communications at any time. To exercise these rights, contact us at " + siteConfig.email,
    bodyTa: `உங்கள் தனிப்பட்ட தரவை அணுக, சரிசெய்ய அல்லது நீக்க உரிமை உள்ளது. ${siteConfig.email} இல் எங்களை தொடர்பு கொள்ளுங்கள்.`,
  },
  {
    heading: "7. Contact Us",
    headingTa: "7. எங்களை தொடர்பு கொள்ளுங்கள்",
    body: `For privacy-related queries, please contact our Data Protection Officer at ${siteConfig.email} or write to us at ${siteConfig.address}`,
    bodyTa: `தனியுரிமை தொடர்பான கேள்விகளுக்கு, ${siteConfig.email} இல் தொடர்பு கொள்ளுங்கள்.`,
  },
];

export default function PrivacyPage() {
  return (
    <LegalPage
      title="Privacy Policy"
      titleTa="தனியுரிமைக் கொள்கை"
      lastUpdated="January 1, 2025"
      sections={sections}
    />
  );
}
