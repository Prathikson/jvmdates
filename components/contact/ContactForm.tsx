"use client";
import { useState } from "react";
import { ArrowRight, Check, Send } from "lucide-react";
import { useLang } from "@/context/LangContext";

export default function ContactForm() {
  const { t } = useLang();
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm(f => ({ ...f, [k]: e.target.value }));

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    await new Promise(r => setTimeout(r, 1500));
    setLoading(false);
    setSubmitted(true);
  };

  if (submitted) return (
    <div className="bg-forest rounded-[48px] p-12 md:p-20 text-center flex flex-col items-center gap-8 shadow-2xl animate-in zoom-in-95 duration-500">
      <div className="w-24 h-24 rounded-full bg-gold flex items-center justify-center shadow-xl">
        <Check size={48} strokeWidth={3} className="text-forest" />
      </div>
      <div className="space-y-4">
        <h3 className="text-4xl md:text-5xl font-semibold text-white tracking-tighter">
          {t("Message Received.", "செய்தி பெறப்பட்டது.")}
        </h3>
        <p className="text-gold/80 text-lg md:text-xl font-medium max-w-sm leading-relaxed">
          {t("Our concierge team will get back to you within 24 hours.", "எங்கள் குழு 24 மணி நேரத்திற்குள் தொடர்பு கொள்ளும்.")}
        </p>
      </div>
      <button 
        onClick={() => { setSubmitted(false); setForm({ name:"", email:"", phone:"", subject:"", message:"" }); }}
        className="mt-4 px-10 py-5 rounded-full bg-white text-forest text-sm font-black uppercase tracking-widest hover:bg-gold hover:text-forest transition-all"
      >
        {t("Send Another Message", "மீண்டும் அனுப்பு")}
      </button>
    </div>
  );

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6" data-scroll-fade>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="relative group">
          <input 
            type="text" 
            placeholder={t("Full Name", "முழு பெயர்")}
            className="w-full px-8 py-6 bg-white border border-forest/10 rounded-[32px] text-lg text-forest placeholder:text-forest/30 outline-none focus:border-gold focus:shadow-2xl focus:shadow-gold/5 transition-all font-medium"
            value={form.name} onChange={set("name")} required 
          />
        </div>
        <div className="relative group">
          <input 
            type="email" 
            placeholder={t("Email Address", "மின்னஞ்சல்")}
            className="w-full px-8 py-6 bg-white border border-forest/10 rounded-[32px] text-lg text-forest placeholder:text-forest/30 outline-none focus:border-gold focus:shadow-2xl focus:shadow-gold/5 transition-all font-medium"
            value={form.email} onChange={set("email")} required 
          />
        </div>
      </div>
      
      <input 
        type="tel" 
        placeholder={t("Phone Number", "தொலைபேசி")}
        className="w-full px-8 py-6 bg-white border border-forest/10 rounded-[32px] text-lg text-forest placeholder:text-forest/30 outline-none focus:border-gold focus:shadow-2xl focus:shadow-gold/5 transition-all font-medium"
        value={form.phone} onChange={set("phone")} 
      />

      <div className="relative">
        <select 
          value={form.subject} onChange={set("subject")} required
          className="w-full px-8 py-6 bg-white border border-forest/10 rounded-[32px] text-lg text-forest outline-none appearance-none cursor-pointer focus:border-gold transition-all font-medium"
        >
          <option value="">{t("Select Subject", "விஷயம் தேர்வு செய்க")}</option>
          <option value="order">{t("Order Enquiry", "ஆர்டர் விசாரணை")}</option>
          <option value="bulk">{t("Bulk / Wholesale", "மொத்த விற்பனை")}</option>
          <option value="partnership">{t("Partnership", "கூட்டாண்மை")}</option>
          <option value="feedback">{t("Feedback", "கருத்து")}</option>
        </select>
        <div className="absolute right-8 top-1/2 -translate-y-1/2 pointer-events-none opacity-30">
          <ArrowRight size={20} className="rotate-90" />
        </div>
      </div>

      <textarea 
        placeholder={t("Your Message", "உங்கள் செய்தி")}
        value={form.message} onChange={set("message")} required rows={6}
        className="w-full px-8 py-8 bg-white border border-forest/10 rounded-[32px] text-lg text-forest placeholder:text-forest/30 outline-none focus:border-gold transition-all font-medium resize-none" 
      />

      <button 
        type="submit" 
        disabled={loading}
        className="group flex items-center justify-center gap-4 py-8 rounded-full bg-forest text-gold font-black text-xl hover:bg-forest-light transition-all shadow-2xl disabled:opacity-60"
      >
        {loading ? t("Sending…", "அனுப்புகிறோம்…") : (
          <>
            {t("Send Message", "செய்தி அனுப்பு")} 
            <Send size={24} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
          </>
        )}
      </button>
    </form>
  );
}