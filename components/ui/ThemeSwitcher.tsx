"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

type Theme = 'kinetic' | 'swiss' | 'ethereal';

export default function ThemeSwitcher() {
    const [theme, setTheme] = useState<Theme>('kinetic');

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
    }, [theme]);

    const themes: { id: Theme; label: string; color: string }[] = [
        { id: 'kinetic', label: 'Kinetic', color: '#ccff00' },
        { id: 'swiss', label: 'Swiss', color: '#ffffff' },
        { id: 'ethereal', label: 'Ethereal', color: '#ec4899' },
    ];

    return (
        <div className="fixed bottom-8 right-8 z-50 flex gap-2 bg-black/20 backdrop-blur-md p-2 rounded-full border border-white/10">
            {themes.map((t) => (
                <button
                    key={t.id}
                    onClick={() => setTheme(t.id)}
                    className={`relative px-4 py-2 rounded-full text-xs font-mono uppercase transition-all duration-300 ${theme === t.id ? 'text-black font-bold' : 'text-white/50 hover:text-white'
                        }`}
                >
                    {theme === t.id && (
                        <motion.div
                            layoutId="activeTheme"
                            className="absolute inset-0 bg-white rounded-full"
                            style={{ backgroundColor: t.color === '#ffffff' && theme === 'swiss' ? '#000000' : t.color }}
                            transition={{ type: "spring", stiffness: 300, damping: 25 }}
                        />
                    )}
                    <span className="relative z-10">{t.label}</span>
                </button>
            ))}
        </div>
    );
}
