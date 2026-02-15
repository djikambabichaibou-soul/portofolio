"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useLanguage, Locale } from "../../context/LanguageContext";
import { useState } from "react";
import { Globe, Check } from "lucide-react";

const languages: { code: Locale; label: string; flag: string }[] = [
    { code: "en", label: "English", flag: "https://flagcdn.com/w40/gb.png" },
    { code: "fr", label: "Français", flag: "https://flagcdn.com/w40/fr.png" },
    { code: "de", label: "Deutsch", flag: "https://flagcdn.com/w40/de.png" },
];

export default function LanguageSwitcher() {
    const { locale, setLocale } = useLanguage();
    const [isOpen, setIsOpen] = useState(false);

    const currentLanguage = languages.find((lang) => lang.code === locale);

    return (
        <div className="relative">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex items-center gap-3 px-4 py-2 rounded-full bg-white/5 border border-white/10 hover:border-electric-lime/50 transition-all duration-300 group shadow-lg"
            >
                <div className="relative w-5 h-4 overflow-hidden rounded-sm shadow-sm border border-white/10">
                    <img
                        src={currentLanguage?.flag}
                        alt={currentLanguage?.label}
                        className="w-full h-full object-cover"
                    />
                </div>
                <span className="text-[11px] font-mono font-bold tracking-widest text-off-white uppercase">
                    {locale}
                </span>
                <Globe className="w-3 h-3 text-electric-lime/50 group-hover:rotate-45 transition-transform duration-500" />
            </button>

            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Backdrop to close */}
                        <div
                            className="fixed inset-0 z-40"
                            onClick={() => setIsOpen(false)}
                        />

                        <motion.div
                            initial={{ opacity: 0, y: 10, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 10, scale: 0.95 }}
                            transition={{ duration: 0.2, ease: "easeOut" }}
                            className="absolute right-0 mt-3 w-48 bg-carbon/95 backdrop-blur-xl border border-white/10 rounded-2xl p-2 shadow-2xl z-50 overflow-hidden"
                        >
                            <div className="flex flex-col gap-1">
                                {languages.map((lang) => (
                                    <button
                                        key={lang.code}
                                        onClick={() => {
                                            setLocale(lang.code);
                                            setIsOpen(false);
                                        }}
                                        className={`flex items-center justify-between w-full px-4 py-3 rounded-xl transition-all duration-300 group ${locale === lang.code
                                                ? "bg-electric-lime text-black font-bold"
                                                : "hover:bg-white/5 text-off-white"
                                            }`}
                                    >
                                        <div className="flex items-center gap-3">
                                            <div className="relative w-6 h-4 overflow-hidden rounded-sm border border-white/10 shadow-sm">
                                                <img
                                                    src={lang.flag}
                                                    alt={lang.label}
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                            <span className="text-xs font-sans tracking-wide uppercase">
                                                {lang.label}
                                            </span>
                                        </div>
                                        {locale === lang.code && (
                                            <Check className="w-4 h-4" />
                                        )}
                                    </button>
                                ))}
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </div>
    );
}
