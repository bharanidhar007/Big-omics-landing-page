"use client";

import Image from "next/image";

export default function CTASection() {
    return (
        <section className="w-full bg-[#eef2f6] py-14 px-6 md:px-12">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">

                {/* LEFT MASCOT */}
                <div className="flex-shrink-0">
                    <Image
                        src="/images/mascot.png"
                        alt="mascot"
                        width={100}
                        height={100}
                        className="object-contain h-auto"
                    />
                </div>
                {/* TEXT */}
                <div className="text-center md:text-left flex-1">
                    <p className="text-lg md:text-xl text-gray-800 font-medium">
                        Unlock the full potential of your RNA-seq and proteomics data!
                    </p>
                </div>

                {/* CTA BUTTON */}
                <div>
                    <a
                        href="https://bigomics.ch/omics-playground/"
                        className="relative inline-flex items-center justify-center px-7 py-3 rounded-full font-semibold text-white text-sm overflow-hidden group transform transition duration-300 hover:-translate-y-1 hover:scale-105"
                    >
                        {/* Gradient background */}
                        <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-indigo-600 transition-all duration-300 group-hover:from-indigo-600 group-hover:to-blue-600"></span>

                        {/* Glow effect */}
                        <span className="absolute inset-0 rounded-full blur-md opacity-40 bg-blue-500 group-hover:opacity-70 transition"></span>

                        {/* Content */}
                        <span className="relative flex items-center gap-2">
                            Try Omics Playground
                            <svg
                                className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2"
                                viewBox="0 0 24 24"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                            </svg>
                        </span>
                    </a>
                </div>
            </div>
        </section>
    );
}