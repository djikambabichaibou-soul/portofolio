"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { experiences } from "@/data/experience";
import { education, certifications } from "@/data/education";

const skills = [
    "Python", "Django", "React", "Next.js", "TypeScript", "Node.js",
    "PostgreSQL", "Docker", "Scrum", "CI/CD", "System Architecture"
];

import { useLanguage } from "../../context/LanguageContext";
import { translations } from "../../data/translations";

export default function About() {
    const { locale } = useLanguage();
    const t = translations[locale].about;

    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"],
    });

    const x1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
    const x2 = useTransform(scrollYProgress, [0, 1], [0, 100]);

    return (
        <section id="about" ref={containerRef} className="py-32 relative overflow-hidden bg-obsidian text-off-white">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-20">

                {/* Left Column: Philosophy & Skills */}
                <div>
                    <span className="text-electric-lime font-mono text-sm tracking-widest uppercase mb-8 block">
                        {t.label}
                    </span>
                    <h2 className="font-display text-4xl md:text-5xl font-bold leading-tight mb-8">
                        {t.title1} <br />
                        <span className="text-white/40">{t.title2}</span>
                    </h2>
                    <p className="font-sans text-xl text-off-white/90 mb-8 leading-relaxed font-medium">
                        {t.intro.split('"')[0]}<span className="text-electric-lime font-bold italic">&quot;{t.intro.split('"')[1]}&quot;</span>{t.intro.split('"')[2]}
                    </p>
                    <p className="font-sans text-lg text-off-white/60 mb-12 leading-relaxed">
                        {t.details}
                    </p>

                    {/* Marquee Skills */}
                    <div className="relative overflow-hidden w-full h-32 mask-linear">
                        <div className="flex flex-col gap-4 opacity-50">
                            <motion.div style={{ x: x1 }} className="flex gap-4 whitespace-nowrap">
                                {skills.map((skill, i) => (
                                    <span key={i} className="text-4xl font-display font-bold text-transparent stroke-text">
                                        {skill}
                                    </span>
                                ))}
                            </motion.div>
                            <motion.div style={{ x: x2 }} className="flex gap-4 whitespace-nowrap -ml-20">
                                {[...skills].reverse().map((skill, i) => (
                                    <span key={i} className="text-4xl font-display font-bold text-transparent stroke-text">
                                        {skill}
                                    </span>
                                ))}
                            </motion.div>
                        </div>
                    </div>
                    <style jsx global>{`
                        .stroke-text { -webkit-text-stroke: 1px rgba(255, 255, 255, 0.3); }
                        .mask-linear { mask-image: linear-gradient(to right, transparent, black 20%, black 80%, transparent); }
                    `}</style>
                </div>

                {/* Right Column: Career Timeline */}
                <div className="space-y-16">

                    {/* Experience */}
                    <div>
                        <h3 className="font-mono text-electric-lime text-sm tracking-widest uppercase mb-6 border-b border-white/10 pb-2">
                            {t.trajectoryLabel}
                        </h3>
                        <div className="space-y-8">
                            {experiences.map((exp) => (
                                <motion.div
                                    key={exp.id}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    className="group"
                                >
                                    <div className="flex justify-between items-start mb-2">
                                        <h4 className="font-display text-lg font-bold group-hover:text-electric-lime transition-colors">
                                            {exp.title[locale]}
                                        </h4>
                                        <span className="font-mono text-[10px] text-white/30 uppercase pt-1">
                                            {exp.period[locale]}
                                        </span>
                                    </div>
                                    <p className="font-mono text-[10px] text-electric-lime/80 uppercase mb-3 tracking-wider">
                                        {exp.company} • {exp.role[locale]}
                                    </p>
                                    <p className="font-sans text-sm text-off-white/60 leading-relaxed">
                                        {exp.description[locale]}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    {/* Education & Certs */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div>
                            <h3 className="font-mono text-electric-lime text-sm tracking-widest uppercase mb-6 border-b border-white/10 pb-2">
                                {t.educationLabel}
                            </h3>
                            <div className="space-y-6">
                                {education.map((edu) => (
                                    <div key={edu.id} className="group">
                                        <span className="font-mono text-[10px] text-white/30 uppercase block mb-1">
                                            {edu.year[locale]}
                                        </span>
                                        <h4 className="font-display font-bold text-sm mb-1 group-hover:text-electric-lime transition-colors">
                                            {edu.degree[locale]}
                                        </h4>
                                        <p className="text-[10px] text-off-white/50 italic mb-2">
                                            {edu.institution}
                                        </p>
                                        <p className="text-[10px] text-off-white/40 leading-tight">
                                            {edu.focus[locale]}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div>
                            <h3 className="font-mono text-electric-lime text-sm tracking-widest uppercase mb-6 border-b border-white/10 pb-2">
                                {t.certificationsLabel}
                            </h3>
                            <div className="space-y-6">
                                {certifications.map((cert) => (
                                    <div key={cert.id} className="group">
                                        <span className="font-mono text-[10px] text-white/30 uppercase block mb-1">
                                            {cert.year}
                                        </span>
                                        <h4 className="font-display font-bold text-sm mb-1 group-hover:text-electric-lime transition-colors">
                                            {cert.name}
                                        </h4>
                                        <p className="text-[10px] text-off-white/50 italic">
                                            {cert.issuer}
                                        </p>
                                        <p className="text-[10px] text-off-white/40 leading-tight mt-1">
                                            {cert.description[locale]}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
