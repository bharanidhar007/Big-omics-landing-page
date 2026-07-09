"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

export default function OmicsFeaturesSection() {
    const sectionRef = useRef(null);

    // Scroll reveal animation
    useEffect(() => {
        const el = sectionRef.current;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    el.classList.add("opacity-100", "translate-y-0");
                }
            },
            { threshold: 0.2 }
        );

        if (el) observer.observe(el);
        return () => observer.disconnect();
    }, []);

    return (
        <section className="w-full bg-gradient-to-b from-gray-50 to-white py-28 px-6 md:px-12 overflow-hidden">
            <div
                ref={sectionRef}
                className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center opacity-0 translate-y-10 transition-all duration-1000 ease-out"
            >
                {/* LEFT SIDE */}
                <div>
                    <p className="text-sm tracking-widest text-gray-500 uppercase mb-4">
                        Interactive Bioinformatics Platform
                    </p>

                    <h2 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-6 leading-tight">
                        Omics Playground Features
                    </h2>

                    <p className="text-gray-600 mb-10 text-lg leading-relaxed">
                        One software for your RNA-Seq and Proteomics data discoveries:
                    </p>

                    <ul className="space-y-5">
                        {[
                            "18+ analysis modules",
                            "150+ interactive plots",
                            "Co-analysis with 6000+ public datasets",
                            "50,000+ public gene sets and pathways such as GO, Reactome, Hallmark, and MSigDB.",
                            "Drug connectivity and drug sensitivity databases with 30,000+ drug expression profiles",
                        ].map((item, i) => (
                            <li key={i} className="flex items-start gap-4 text-gray-700 group">
                                <span className="mt-1 w-6 h-6 flex items-center justify-center rounded-full bg-blue-600 text-white text-xs shadow-md group-hover:scale-110 transition">
                                    ✓
                                </span>
                                <span className="group-hover:text-gray-900 transition">
                                    {item}
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* RIGHT SIDE */}
                <div className="grid grid-cols-2 gap-8">

                    {/* CARD 1 */}
                    <div className="relative group">
                        {/* Glow */}
                        <div className="absolute inset-0 bg-blue-100 rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition"></div>

                        <div className="relative bg-white/80 backdrop-blur-md rounded-3xl p-6 text-center shadow-lg border border-gray-100 hover:-translate-y-2 hover:shadow-2xl transition duration-500">
                            <h3 className="text-lg font-semibold text-gray-800 mb-4">
                                RNA-Seq Data Analysis
                            </h3>

                            <div className="w-full h-40 relative mb-6">
                                <Image
                                    src="/rna.png"
                                    alt="RNA Analysis"
                                    fill
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                    className="object-contain group-hover:scale-105 transition duration-500"
                                />
                            </div>

                            <a
                                href="https://bigomics.ch/rna-seq-data-analysis/"
                                className="relative inline-block px-6 py-2 rounded-full text-sm font-medium border border-blue-600 text-blue-600 overflow-hidden group"
                            >
                                <span className="relative z-10 group-hover:text-white transition">
                                    LEARN MORE
                                </span>
                                <span className="absolute inset-0 bg-blue-600 scale-x-0 group-hover:scale-x-100 origin-left transition duration-300"></span>
                            </a>
                        </div>
                    </div>

                    {/* CARD 2 */}
                    <div className="relative group">
                        {/* Glow */}
                        <div className="absolute inset-0 bg-purple-100 rounded-3xl blur-xl opacity-20 group-hover:opacity-40 transition"></div>

                        <div className="relative bg-white/80 backdrop-blur-md rounded-3xl p-6 text-center shadow-lg border border-gray-100 hover:-translate-y-2 hover:shadow-2xl transition duration-500">
                            <h3 className="text-lg font-semibold text-gray-800 mb-4">
                                Proteomics Data Analysis
                            </h3>

                            <div className="w-full h-40 relative mb-6">
                                <Image
                                    src="/proteomics.png"
                                    alt="Proteomics Analysis"
                                    fill
                                    sizes="(max-width: 768px) 100vw, 50vw"
                                    className="object-contain group-hover:scale-105 transition duration-500"
                                />
                            </div>

                            <a
                                href="https://bigomics.ch/proteomics-data-analysis/"
                                className="relative inline-block px-6 py-2 rounded-full text-sm font-medium border border-blue-600 text-blue-600 overflow-hidden group"
                            >
                                <span className="relative z-10 group-hover:text-white transition">
                                    LEARN MORE
                                </span>
                                <span className="absolute inset-0 bg-blue-600 scale-x-0 group-hover:scale-x-100 origin-left transition duration-300"></span>
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}