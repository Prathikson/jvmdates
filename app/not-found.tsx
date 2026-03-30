"use client";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { LangProvider } from "@/context/LangContext";
import { useLang } from "@/context/LangContext";

function Inner() {
  const { t } = useLang();
  return (
    <div className="min-h-screen bg-bg flex flex-col items-center justify-center px-5 text-center">
      <p className="text-xs font-bold tracking-widest uppercase text-gold mb-4">404</p>
      <h1 className="text-forest font-bold leading-none tracking-tighter mb-6"
        style={{ fontSize: "clamp(48px,8vw,120px)" }}>
        {t("Page not found.","பக்கம் கிடைக்கவில்லை.")}
      </h1>
      <p className="text-muted text-lg max-w-sm leading-relaxed mb-10">
        {t("The page you're looking for doesn't exist or has been moved.","நீங்கள் தேடும் பக்கம் இல்லை அல்லது நகர்த்தப்பட்டது.")}
      </p>
      <Link href="/"
        className="flex items-center gap-2 px-7 py-3.5 rounded-full bg-forest text-beige font-bold text-sm hover:bg-forest-light transition-colors">
        <ArrowLeft size={16} /> {t("Go Home","முகப்புக்கு செல்")}
      </Link>
    </div>
  );
}

export default function NotFound() {
  return <LangProvider><Inner /></LangProvider>;
}
