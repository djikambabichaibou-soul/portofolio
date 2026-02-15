"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Preloader() {
    const [isLoading, setIsLoading] = useState(true);
    const [count, setCount] = useState(0);

    useEffect(() => {
        // Simulate loading sequence
        const duration = 2000; // 2 seconds
        const interval = 20;
        const steps = duration / interval;
        const increment = 100 / steps;

        const timer = setInterval(() => {
            setCount((prev) => {
                const next = prev + increment;
                if (next >= 100) {
                    clearInterval(timer);
                    return 100;
                }
                return next;
            });
        }, interval);

        const timeout = setTimeout(() => {
            setIsLoading(false);
        }, duration + 500); // Slight delay after 100%

        return () => {
            clearInterval(timer);
            clearTimeout(timeout);
        };
    }, []);

    return (
        <AnimatePresence mode="wait">
            {isLoading && (
                <motion.div
                    key="preloader"
                    exit={{ y: "-100%", transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] } }}
                    className="fixed inset-0 z-[9999] flex items-center justify-center bg-obsidian text-off-white"
                >
                    <div className="flex flex-col items-center">
                        <div className="font-display text-8xl md:text-9xl font-bold flex">
                            <span className="w-48 text-right tabular-nums">{Math.round(count)}</span>
                            <span>%</span>
                        </div>
                        <div className="mt-4 font-mono text-sm text-electric-lime tracking-widest uppercase animate-pulse">
                            System Initializing...
                        </div>

                        {/* Decorative loading bar */}
                        <div className="mt-8 w-64 h-1 bg-white/10 rounded-full overflow-hidden">
                            <motion.div
                                className="h-full bg-electric-lime"
                                style={{ width: `${count}%` }}
                            />
                        </div>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
