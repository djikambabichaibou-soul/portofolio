"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import MagneticButton from "../ui/MagneticButton";
import { useRef } from "react";

const textVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: i * 0.15,
            duration: 1.2,
            ease: [0.22, 1, 0.36, 1] as const,
        },
    }),
};

import { useLanguage } from "../../context/LanguageContext";
import { translations } from "../../data/translations";

export default function Hero() {
    const { locale } = useLanguage();
    const t = translations[locale].hero;

    const containerRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"],
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
    const textScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
    const textOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    return (
        <section ref={containerRef} className="relative h-screen flex flex-col items-center justify-center overflow-hidden bg-obsidian">

            {/* Parallax Background Layer */}
            <motion.div style={{ y }} className="absolute inset-0 z-0">
                {/* Kinetic Grid - Subtle movement */}
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20 pointer-events-none" />

                {/* Atmosphere */}
                <div className="absolute top-0 left-0 w-full h-full bg-[url('/noise.png')] opacity-10 brightness-150 mix-blend-overlay pointer-events-none"></div>
                <div className="absolute top-1/4 left-1/4 w-[40rem] h-[40rem] bg-cyber-violet/10 rounded-full blur-[128px] animate-pulse"></div>
            </motion.div>

            <div className="z-10 w-full max-w-8xl mx-auto px-4 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative h-full">

                {/* Left Column: Text Content */}
                <motion.div
                    style={{ scale: textScale, opacity: textOpacity }}
                    className="flex flex-col items-center lg:items-start text-center lg:text-left pt-20 lg:pt-0"
                >
                    {/* Top Tagline */}
                    <motion.div
                        initial="hidden"
                        animate="visible"
                        variants={textVariants}
                        custom={0}
                        className="font-mono text-electric-lime mb-8 tracking-[0.2em] text-xs md:text-sm uppercase border border-electric-lime/30 px-4 py-2 rounded-full bg-electric-lime/5 backdrop-blur-sm inline-block"
                    >
                        {t.tagline}
                    </motion.div>

                    {/* Main Title - MASSIVE & SPLIT */}
                    <h1 className="font-display text-[15vw] lg:text-[10vw] leading-[0.8] font-bold tracking-tighter mb-8 relative z-20 mix-blend-difference text-off-white uppercase">
                        <span className="block overflow-hidden">
                            <motion.span variants={textVariants} initial="hidden" animate="visible" custom={1} className="block">
                                {t.title1}
                            </motion.span>
                        </span>
                        <span className="block overflow-hidden text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40">
                            <motion.span variants={textVariants} initial="hidden" animate="visible" custom={2} className="block">
                                {t.title2}
                            </motion.span>
                        </span>
                    </h1>

                    <motion.p
                        variants={textVariants}
                        initial="hidden"
                        animate="visible"
                        custom={3}
                        className="font-sans text-lg md:text-2xl text-off-white/80 max-w-xl mb-12 leading-relaxed"
                    >
                        {t.description.includes(';') ? (
                            <>
                                {t.description.split(';')[0]}; <span className="text-white">{t.description.split(';')[1]?.split('. ')[0] || ''}</span>.
                                {t.description.includes('. ') ? t.description.split('. ')[1] : ''}
                            </>
                        ) : (
                            t.description
                        )}
                        <br />
                        <span className="text-off-white/50 text-base mt-4 block">{t.critical}</span>
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 1, duration: 0.8 }}
                        className="flex flex-col md:flex-row gap-6 z-20"
                    >
                        <MagneticButton>
                            <a href="#contact" className="group px-8 py-4 bg-off-white text-obsidian font-bold text-sm tracking-widest hover:bg-electric-lime transition-colors duration-300">
                                {t.ctaPrimary}
                            </a>
                        </MagneticButton>
                        <MagneticButton>
                            <a href="#work" className="group px-8 py-4 border border-white/20 text-off-white font-bold text-sm tracking-widest hover:border-electric-lime hover:text-electric-lime transition-all duration-300">
                                {t.ctaSecondary}
                            </a>
                        </MagneticButton>
                    </motion.div>
                </motion.div>

                {/* Right Column: Portrait */}
                <motion.div
                    style={{ y: imageY }}
                    className="relative order-first lg:order-last"
                >
                    <div className="relative w-full aspect-square max-w-[500px] mx-auto group">
                        {/* Decorative background shapes */}
                        <div className="absolute -inset-4 bg-electric-lime/20 rounded-full blur-3xl group-hover:bg-electric-lime/30 transition-colors duration-700 animate-pulse"></div>
                        <div className="absolute top-0 right-0 w-32 h-32 border-t-2 border-r-2 border-electric-lime/50 z-20 translate-x-4 -translate-y-4"></div>
                        <div className="absolute bottom-0 left-0 w-32 h-32 border-b-2 border-l-2 border-electric-lime/50 z-20 -translate-x-4 translate-y-4"></div>

                        {/* Image Container */}
                        <div className="relative w-full h-full overflow-hidden rounded-3xl border border-white/10 bg-carbon/50 backdrop-blur-md">
                            <Image
                                src="/images/vraiphoto.jpeg"
                                alt="Professional Portrait"
                                fill
                                className="object-cover object-top grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
                                priority
                            />
                            {/* Overlay Vignette */}
                            <div className="absolute inset-0 bg-gradient-to-t from-obsidian via-transparent to-transparent opacity-60"></div>
                        </div>

                        {/* Name Branding - Below Photo */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1, duration: 0.8 }}
                            className="mt-8 text-center"
                        >
                            <h3 className="font-display text-lg md:text-xl font-bold tracking-[0.3em] text-off-white uppercase">
                                DJIKAMBABI SOULAIMANOU CHAIBOU
                            </h3>
                            <div className="w-12 h-[2px] bg-electric-lime mx-auto mt-2"></div>
                        </motion.div>

                        {/* Stats / Badges floating */}
                        <motion.div
                            initial={{ x: 20, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            transition={{ delay: 1.5, duration: 0.8 }}
                            className="absolute -right-8 top-1/2 -translate-y-1/2 bg-white/5 backdrop-blur-xl border border-white/10 p-6 rounded-2xl hidden md:block"
                        >
                            <div className="flex flex-col gap-4">
                                <div className="flex items-center gap-3">
                                    <div className="w-2 h-2 rounded-full bg-electric-lime animate-ping"></div>
                                    <span className="text-[10px] font-mono text-off-white/80 uppercase tracking-widest">Available for Hire</span>
                                </div>
                                <div className="h-[1px] w-full bg-white/10"></div>
                                <div className="flex flex-col">
                                    <span className="text-2xl font-display font-bold text-white">2+</span>
                                    <span className="text-[10px] font-mono text-off-white/40 uppercase">Years Exp.</span>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2, duration: 1 }}
                className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-2"
            >
                <span className="text-[10px] font-mono text-white/40 tracking-widest uppercase">{t.scroll}</span>
                <div className="w-[1px] h-12 bg-gradient-to-b from-electric-lime to-transparent"></div>
            </motion.div>
        </section>
    );
}
