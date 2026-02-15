"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

import { useLanguage } from "../../context/LanguageContext";
import { translations } from "../../data/translations";
import LanguageSwitcher from "../ui/LanguageSwitcher";

export default function Header() {
    const { locale } = useLanguage();
    const t = translations[locale].nav;
    const [isOpen, setIsOpen] = useState(false);
    const pathname = usePathname();

    const navItems = [
        { name: t.work, href: "#work" },
        { name: t.about, href: "#about" },
        { name: t.contact, href: "#contact" },
    ];

    // Close menu on navigation or window resize
    useEffect(() => {
        setIsOpen(false);
    }, [pathname]);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) setIsOpen(false);
        };
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Prevent scroll when menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
    }, [isOpen]);

    return (
        <header className="fixed top-0 left-0 w-full z-50 flex justify-center py-6 pointer-events-none">
            <nav className="pointer-events-auto bg-carbon/80 backdrop-blur-md border border-white/5 rounded-full px-6 py-2 flex items-center gap-8 shadow-2xl relative z-[60] mix-blend-difference">
                <Link href="/" className="flex flex-col">
                    <span className="font-display font-bold text-xl tracking-tighter text-off-white hover:text-electric-lime transition-colors duration-300">
                        DA.
                    </span>
                    <span className="font-mono text-[7px] tracking-[0.3em] text-white/30 uppercase -mt-1 whitespace-nowrap hidden lg:block">
                        DJIKAMBABI SOULAIMANOU CHAIBOU
                    </span>
                </Link>

                {/* Desktop Nav */}
                <ul className="hidden md:flex gap-6 items-center">
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

                {/* Mobile Hamburger Button */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden flex flex-col gap-1.5 p-2"
                    aria-label="Toggle Menu"
                >
                    <motion.span
                        animate={isOpen ? { rotate: 45, y: 8 } : { rotate: 0, y: 0 }}
                        className="w-6 h-0.5 bg-off-white block rounded-full"
                    />
                    <motion.span
                        animate={isOpen ? { opacity: 0, x: -10 } : { opacity: 1, x: 0 }}
                        className="w-6 h-0.5 bg-off-white block rounded-full"
                    />
                    <motion.span
                        animate={isOpen ? { rotate: -45, y: -8 } : { rotate: 0, y: 0 }}
                        className="w-6 h-0.5 bg-off-white block rounded-full"
                    />
                </button>
            </nav>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ type: "spring", damping: 25, stiffness: 200 }}
                        className="fixed inset-0 bg-obsidian/95 backdrop-blur-xl z-50 flex flex-col items-center justify-center p-8 pointer-events-auto"
                    >
                        <motion.ul
                            initial="closed"
                            animate="open"
                            variants={{
                                open: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
                                closed: { transition: { staggerChildren: 0.05, staggerDirection: -1 } }
                            }}
                            className="flex flex-col gap-12 items-center"
                        >
                            {navItems.map((item) => (
                                <motion.li
                                    key={item.name}
                                    variants={{
                                        open: { opacity: 1, y: 0 },
                                        closed: { opacity: 0, y: 20 }
                                    }}
                                >
                                    <Link
                                        href={item.href}
                                        onClick={() => setIsOpen(false)}
                                        className="font-display text-5xl font-bold text-off-white hover:text-electric-lime transition-colors"
                                    >
                                        {item.name}
                                    </Link>
                                </motion.li>
                            ))}
                            <motion.li
                                variants={{
                                    open: { opacity: 1, y: 0 },
                                    closed: { opacity: 0, y: 20 }
                                }}
                                className="mt-8 pt-8 border-t border-white/10 w-full flex justify-center"
                            >
                                <LanguageSwitcher />
                            </motion.li>
                        </motion.ul>

                        {/* Signature at bottom of mobile menu */}
                        <div className="absolute bottom-12 left-0 w-full text-center px-6">
                            <span className="font-mono text-[9px] tracking-[0.4em] text-white/20 uppercase">
                                DJIKAMBABI SOULAIMANOU CHAIBOU
                            </span>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
