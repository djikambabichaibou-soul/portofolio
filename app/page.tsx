"use client";

import Hero from "@/components/home/Hero";
import ProjectCard from "@/components/home/ProjectCard";
import { projects } from "@/data/projects";
import About from "@/components/home/About";
import { useLanguage } from "../context/LanguageContext";
import { translations } from "../data/translations";
import { motion } from "framer-motion";

export default function Home() {
    const { locale } = useLanguage();
    const t_projects = translations[locale].projects;
    const t_contact = translations[locale].contact;

    return (
        <main className="min-h-screen">
            <Hero />

            {/* Selected Work Section */}
            <section id="work" className="py-24 px-4 md:px-12 max-w-8xl mx-auto">
                <div className="mb-16 md:mb-24 flex flex-col md:flex-row justify-between items-end border-b border-white/10 pb-8">
                    <h2 className="font-display text-5xl md:text-7xl font-bold text-off-white uppercase">
                        {t_projects.title1}<br />
                        <span className="text-white/20">{t_projects.title2}</span>
                    </h2>
                    <p className="font-mono text-sm text-white/40 mt-6 md:mt-0 text-right max-w-xs uppercase tracking-widest">
                        {t_projects.tagline}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                    {projects.map((project, index) => (
                        <ProjectCard key={project.id} project={project} index={index} />
                    ))}
                </div>
            </section>

            {/* Manifesto / About Teaser */}
            <About />

            {/* Scarcity Contact Footer Area */}
            <section id="contact" className="py-32 px-4 flex flex-col justify-center items-center text-center bg-obsidian">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto w-full"
                >
                    <span className="text-electric-lime font-mono text-xs tracking-widest uppercase mb-6 block">
                        {t_contact.availability}
                    </span>
                    <h2 className="font-display text-4xl md:text-7xl font-bold mb-16 leading-tight uppercase">
                        {t_contact.title1} <br />
                        <span className="text-white/40">{t_contact.title2}</span>
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 items-start pt-12 border-t border-white/5">
                        {/* Email */}
                        <div className="flex flex-col items-center gap-4 group">
                            <span className="font-mono text-[10px] text-white/30 uppercase tracking-[0.2em]">{t_contact.email}</span>
                            <a
                                href="mailto:djikambabichaibou@gmail.com"
                                className="text-lg md:text-xl text-off-white hover:text-electric-lime transition-all duration-300 font-medium border-b border-transparent hover:border-electric-lime/50 pb-1"
                            >
                                djikambabichaibou@gmail.com
                            </a>
                        </div>

                        {/* Phone */}
                        <div className="flex flex-col items-center gap-4">
                            <span className="font-mono text-[10px] text-white/30 uppercase tracking-[0.2em]">{t_contact.phone}</span>
                            <a
                                href="tel:+237658526836"
                                className="text-lg md:text-xl text-off-white hover:text-electric-lime transition-all duration-300 font-medium"
                            >
                                +237 658 526 836
                            </a>
                        </div>

                        {/* Location */}
                        <div className="flex flex-col items-center gap-4">
                            <span className="font-mono text-[10px] text-white/30 uppercase tracking-[0.2em]">{t_contact.location}</span>
                            <p className="text-lg md:text-xl text-off-white font-medium uppercase tracking-wider">
                                DOUALA, <span className="text-white/40">Cameroun</span>
                            </p>
                        </div>
                    </div>
                </motion.div>
            </section>

        </main>
    );
}
