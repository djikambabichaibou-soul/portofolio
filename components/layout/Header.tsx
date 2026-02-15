"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

import { useLanguage } from "../../context/LanguageContext";
import { translations } from "../../data/translations";
import LanguageSwitcher from "../ui/LanguageSwitcher";

export default function Header() {
    const { locale } = useLanguage();
    const t = translations[locale].nav;

    const navItems = [
        { name: t.work, href: "#work" },
        { name: t.about, href: "#about" },
        { name: t.contact, href: "#contact" },
    ];

    return (
        <header className="fixed top-0 left-0 w-full z-50 flex justify-center py-6 pointer-events-none mix-blend-difference">
            <nav className="pointer-events-auto bg-carbon/80 backdrop-blur-md border border-white/5 rounded-full px-6 py-2 flex items-center gap-8 shadow-2xl">
                <Link href="/" className="flex flex-col">
                    <span className="font-display font-bold text-xl tracking-tighter text-off-white hover:text-electric-lime transition-colors duration-300">
                        DA.
                    </span>
                    <span className="font-mono text-[7px] tracking-[0.3em] text-white/30 uppercase -mt-1 whitespace-nowrap hidden lg:block">
                        DJIKAMBABI SOULAIMANOU CHAIBOU
                    </span>
                </Link>
                <ul className="flex gap-6 items-center">
                    {navItems.map((item) => (
                        <li key={item.name}>
                            <Link
                                href={item.href}
                                className="font-sans text-sm font-medium text-off-white/70 hover:text-white transition-colors relative group"
                            >
                                {item.name}
                                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-electric-lime transition-all duration-300 group-hover:w-full" />
                            </Link>
                        </li>
                    ))}
                    <li className="border-l border-white/10 pl-6 h-6 flex items-center">
                        <LanguageSwitcher />
                    </li>
                </ul>
            </nav>
        </header>
    );
}
