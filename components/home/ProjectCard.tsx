"use client";

import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { Project } from "@/data/projects";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { MouseEvent } from "react";

import { useLanguage } from "../../context/LanguageContext";
import { translations } from "../../data/translations";

export default function ProjectCard({ project, index }: { project: Project; index: number }) {
    const { locale } = useLanguage();
    const t = translations[locale].projects.caseStudyLabels;

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseX = useSpring(x, { stiffness: 500, damping: 100 });
    const mouseY = useSpring(y, { stiffness: 500, damping: 100 });

    const rotateX = useTransform(mouseY, [-0.5, 0.5], ["10deg", "-10deg"]);
    const rotateY = useTransform(mouseX, [-0.5, 0.5], ["-10deg", "10deg"]);

    const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
        const rect = e.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseXVal = e.clientX - rect.left;
        const mouseYVal = e.clientY - rect.top;
        const xPct = mouseXVal / width - 0.5;
        const yPct = mouseYVal / height - 0.5;
        x.set(xPct);
        y.set(yPct);
    };

    const handleMouseLeave = () => {
        x.set(0);
        y.set(0);
    };

    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: index * 0.1 }}
            style={{
                perspective: 1000,
            }}
            className="w-full h-[400px] md:h-[500px]"
        >
            <motion.div
                onMouseMove={handleMouseMove}
                onMouseLeave={handleMouseLeave}
                style={{
                    rotateX,
                    rotateY,
                    transformStyle: "preserve-3d",
                }}
                className="group relative w-full h-full bg-carbon rounded-3xl overflow-hidden border border-white/5 cursor-pointer shadow-2xl shadow-black/50"
            >
                {/* Background / Image Placeholder */}
                <div
                    className="absolute inset-0 bg-gradient-to-br from-carbon to-gray-900 group-hover:scale-105 transition-transform duration-700 ease-out"
                    style={{ transform: "translateZ(0px)" }}
                >
                    {/* In production this would be an Image component */}
                    <div className="w-full h-full opacity-30 mix-blend-overlay bg-[url('/noise.png')]"></div>
                </div>

                <div
                    className="absolute inset-0 flex flex-col justify-between p-8 z-10 bg-gradient-to-t from-black/90 via-black/50 to-transparent"
                    style={{ transform: "translateZ(50px)" }}
                >
                    <div className="flex justify-between items-start opacity-70 group-hover:opacity-100 transition-opacity">
                        <span className="px-3 py-1 rounded-full border border-white/10 text-xs font-mono text-off-white/60">
                            {project.year}
                        </span>
                        <Link href={project.link} target="_blank" className="p-3 bg-white/5 rounded-full hover:bg-electric-lime hover:text-black transition-all duration-300">
                            <ArrowUpRight size={20} />
                        </Link>
                    </div>

                    <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                        <h3 className="font-display text-3xl md:text-5xl font-bold text-off-white mb-2 group-hover:text-electric-lime transition-colors">
                            {project.title}
                        </h3>
                        <p className="font-mono text-xs text-electric-lime mb-4 uppercase tracking-widest">
                            {project.tagline[locale]}
                        </p>

                        {/* Strategic Case Study Grid - Visible on Hover */}
                        <div className="h-0 group-hover:h-auto overflow-hidden transition-all duration-500 opacity-0 group-hover:opacity-100 delay-100">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-4 border-l-2 border-electric-lime/50 pl-4 mb-6">
                                <div>
                                    <p className="font-mono text-[10px] text-electric-lime uppercase tracking-widest mb-1">{t.context}</p>
                                    <p className="font-sans text-[11px] text-off-white/70 leading-relaxed italic">{project.caseStudy[locale].context}</p>
                                </div>
                                <div>
                                    <p className="font-mono text-[10px] text-electric-lime uppercase tracking-widest mb-1">{t.objective}</p>
                                    <p className="font-sans text-[11px] text-off-white/70 leading-relaxed font-medium">{project.caseStudy[locale].objective}</p>
                                </div>
                                <div className="md:col-span-2">
                                    <p className="font-mono text-[10px] text-electric-lime uppercase tracking-widest mb-1">{t.problem}</p>
                                    <p className="font-sans text-[11px] text-off-white/80 leading-relaxed">{project.caseStudy[locale].problem}</p>
                                </div>
                                <div className="md:col-span-2 text-white/90">
                                    <p className="font-mono text-[10px] text-electric-lime uppercase tracking-widest mb-1">{t.solution}</p>
                                    <p className="font-sans text-[11px] leading-relaxed">{project.caseStudy[locale].solution}</p>
                                </div>
                                <div>
                                    <p className="font-mono text-[10px] text-electric-lime uppercase tracking-widest mb-1">{t.result}</p>
                                    <p className="font-sans text-[11px] text-white font-bold">{project.caseStudy[locale].result}</p>
                                </div>
                                <div>
                                    <p className="font-mono text-[10px] text-electric-lime uppercase tracking-widest mb-1">{t.addedValue}</p>
                                    <p className="font-sans text-[11px] text-electric-lime font-bold">{project.caseStudy[locale].addedValue}</p>
                                </div>
                            </div>

                            <div className="flex flex-wrap gap-2 mb-4">
                                {project.tech.map((t) => (
                                    <span key={t} className="text-[9px] font-bold text-black bg-electric-lime px-2 py-1 rounded-sm uppercase tracking-tighter">
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
}
