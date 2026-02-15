"use client";

import React, { createContext, useContext, useState, useEffect, ReactNode } from "react";

export type Locale = "en" | "fr" | "de";

interface LanguageContextType {
    locale: Locale;
    setLocale: (locale: Locale) => void;
    t: (key: string) => any;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
    const [locale, setLocaleState] = useState<Locale>("en");

    useEffect(() => {
        const savedLocale = localStorage.getItem("portfolio-locale") as Locale;
        if (savedLocale && ["en", "fr", "de"].includes(savedLocale)) {
            setLocaleState(savedLocale);
        } else if (typeof window !== "undefined") {
            const browserLang = navigator.language.split("-")[0];
            if (["en", "fr", "de"].includes(browserLang)) {
                setLocaleState(browserLang as Locale);
            }
        }
    }, []);

    const setLocale = (newLocale: Locale) => {
        setLocaleState(newLocale);
        localStorage.setItem("portfolio-locale", newLocale);
    };

    // Translation function will be implemented in a separate hook or using a dictionary
    const t = (key: string) => {
        // This will be handled in the specific components or a more advanced wrapper
        return key;
    };

    return (
        <LanguageContext.Provider value={{ locale, setLocale, t }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (context === undefined) {
        throw new Error("useLanguage must be used within a LanguageProvider");
    }
    return context;
};
