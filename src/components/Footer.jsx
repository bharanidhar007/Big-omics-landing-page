"use client";

import Image from "next/image";
import { FaLinkedin, FaTwitter, FaGithub, FaYoutube } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="w-full bg-[#0B2F5B] text-white pt-12 md:pt-16 pb-10 md:pb-12">

            {/* CONTAINER */}
            <div className="max-w-[1400px] mx-auto px-6 sm:px-10 md:px-14 lg:px-20">

                {/* GRID */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 md:gap-12 lg:gap-14">

                    {/* NAVIGATION */}
                    <div>
                        <h3 className="text-base md:text-lg font-semibold tracking-widest mb-5 md:mb-6">
                            NAVIGATION
                        </h3>

                        <ul className="space-y-2 md:space-y-3 text-sm md:text-base text-gray-300">
                            <li><a href="/" className="hover:text-white hover:underline">Home</a></li>
                            <li><a href="/blog" className="hover:text-white hover:underline">Blog</a></li>
                            <li><a href="/wp-login" className="hover:text-white hover:underline">WP Login</a></li>
                            <li><a href="/pricing" className="hover:text-white hover:underline">Pricing</a></li>
                            <li><a href="/tutorials" className="hover:text-white hover:underline">Tutorials</a></li>
                        </ul>
                    </div>

                    {/* LINKS */}
                    <div>
                        <h3 className="text-base md:text-lg font-semibold tracking-widest mb-5 md:mb-6">
                            LINKS
                        </h3>

                        <ul className="space-y-2 md:space-y-3 text-sm md:text-base text-gray-300">
                            <li className="flex items-center gap-2">
                                <a href="/login" className="hover:text-white hover:underline">Log in</a>
                                <span className="text-gray-500">|</span>
                                <a href="/register" className="hover:text-white hover:underline">Register</a>
                            </li>
                        </ul>

                        {/* Swiss Logo */}
                        <a
                            href="https://www.swissbiotech.org/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="mt-6 md:mt-8 block"
                        >
                            <p className="text-sm md:text-base text-gray-300 mb-2">
                                Member
                            </p>

                            <div className="w-[120px] md:w-[140px]">
                                <Image
                                    src="/logos/swiss-biotech.webp"
                                    alt="Swiss Biotech Association"
                                    width={140}
                                    height={45}
                                    className="w-full object-contain hover:opacity-80 transition"
                                    style={{ height: "auto" }}
                                />
                            </div>
                        </a>
                    </div>

                    {/* ADDRESS */}
                    <div>
                        <h3 className="text-base md:text-lg font-semibold tracking-widest mb-5 md:mb-6">
                            WHERE TO FIND US
                        </h3>

                        <div className="text-sm md:text-base text-gray-300 space-y-2 leading-relaxed">
                            <p className="text-white font-semibold text-base md:text-lg">
                                BigOmics Analytics SA
                            </p>
                            <p>Via Serafino Balestra 12</p>
                            <p>6900 Lugano</p>
                            <p>Switzerland</p>

                            <div className="mt-3 md:mt-4 space-y-1">
                                <p>Phone: +41 91 229 93 58</p>
                                <p>Email: hello@bigomics.ch</p>
                            </div>
                        </div>
                    </div>

                    {/* LEGAL */}
                    <div>
                        <h3 className="text-base md:text-lg font-semibold tracking-widest mb-5 md:mb-6">
                            LEGAL
                        </h3>

                        <ul className="space-y-2 md:space-y-3 text-sm md:text-base text-gray-300">
                            <li><a href="/impressum" className="hover:text-white hover:underline">Impressum</a></li>
                            <li><a href="/security" className="hover:text-white hover:underline">Security</a></li>
                            <li><a href="/privacy-policy" className="hover:text-white hover:underline">Privacy policy</a></li>
                            <li><a href="/terms" className="hover:text-white hover:underline">Terms and conditions</a></li>
                            <li><a href="/sla" className="hover:text-white hover:underline">Service level agreement</a></li>
                        </ul>
                    </div>
                </div>

                {/* FOLLOW US */}
                <div className="mt-10 md:mt-14 text-center">
                    <h3 className="text-base md:text-lg font-semibold tracking-widest mb-5 md:mb-6">
                        FOLLOW US
                    </h3>

                    <div className="flex justify-center gap-5 md:gap-6">

                        <a href="https://www.linkedin.com/company/bigomics-analytics" target="_blank" rel="noopener noreferrer">
                            <div className="w-11 h-11 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-white/10 text-lg md:text-xl text-gray-300 transition hover:bg-[#0077B5] hover:text-white hover:scale-110">
                                <FaLinkedin />
                            </div>
                        </a>

                        <a href="https://x.com/bigomics" target="_blank" rel="noopener noreferrer">
                            <div className="w-11 h-11 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-white/10 text-lg md:text-xl text-gray-300 transition hover:bg-[#1DA1F2] hover:text-white hover:scale-110">
                                <FaTwitter />
                            </div>
                        </a>

                        <a href="https://github.com/bigomics" target="_blank" rel="noopener noreferrer">
                            <div className="w-11 h-11 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-white/10 text-lg md:text-xl text-gray-300 transition hover:bg-[#333] hover:text-white hover:scale-110">
                                <FaGithub />
                            </div>
                        </a>

                        <a href="https://www.youtube.com/channel/UChGASaLbr63pxmDOeXTQu_A" target="_blank" rel="noopener noreferrer">
                            <div className="w-11 h-11 md:w-12 md:h-12 flex items-center justify-center rounded-full bg-white/10 text-lg md:text-xl text-gray-300 transition hover:bg-[#FF0000] hover:text-white hover:scale-110">
                                <FaYoutube />
                            </div>
                        </a>

                    </div>
                </div>

                {/* COPYRIGHT */}
                <div className="mt-8 md:mt-10 text-center text-sm md:text-base text-gray-400">
                    Copyright © 2026 BigOmics Analytics
                </div>
            </div>
        </footer>
    );
}