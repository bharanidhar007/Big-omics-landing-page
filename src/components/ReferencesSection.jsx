"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";

export default function ReferencesSection() {
    const data = [
        {
            image: "/images/ref1.jpg",
            logo: "/logos/iu.webp",
            tag: "",
            title: "Enabling Omics Data Analysis at Scale",
            link: "READ THE CASE STUDY",
            url: "https://bigomics.ch/blog/enabling-omics-data-analysis-at-scale/",
        },
        {
            image: "/images/ref2.jpg",
            logo: "",
            tag: "RESEARCH INSTITUTE",
            title: "Intuitive and Easy-To-Use Omics Data Analysis",
            link: "READ THE CUSTOMER STORY",
            url: "https://bigomics.ch/blog/intuitive-and-easy-to-use-omics-data-analysis/",
        },
        {
            image: "/images/ref3.jpg",
            logo: "/logos/valerio.webp",
            tag: "",
            title: "Flexible, Trusted and User-Friendly Omics Data Analysis",
            link: "READ THE CASE STUDY",
            url: "https://bigomics.ch/blog/omics-data-analysis-for-novel-cancer-drug-discovery-valerio-therapeutics/",
        },
    ];

    return (
        <section className="w-full bg-[#f6f7f9] py-20 px-6 md:px-12">
            <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
                {data.map((item, index) => (
                    <div
                        key={index}
                        className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
                    >
                        {/* IMAGE */}
                        <div className="relative w-full h-56">
                            <Image
                                src={item.image}
                                alt="reference"
                                fill
                                sizes="(max-width: 768px) 100vw, 33vw"
                                className="object-cover"
                            />
                        </div>

                        {/* CONTENT */}
                        <div className="p-6 space-y-4">

                            {/* LOGO or TAG */}
                            <div className="h-[40px] flex items-center">
                                {item.logo ? (
                                    <Image
                                        src={item.logo}
                                        alt="logo"
                                        width={90}
                                        height={40}
                                        className="object-contain"
                                        style={{ width: "auto", height: "100%" }}
                                    />
                                ) : (
                                    <p className="text-xs tracking-widest text-gray-500 font-semibold">
                                        {item.tag}
                                    </p>
                                )}
                            </div>

                            {/* TITLE */}
                            <h3 className="text-lg font-semibold text-gray-900 leading-snug min-h-[56px] line-clamp-2 min-h-[64px]">
                                {item.title}
                            </h3>

                            {/* LINK */}
                            <div className="flex items-center justify-between pt-4">
                                <a
                                    href={item.url}
                                    className="text-blue-600 text-sm font-medium transition-colors duration-300 hover:text-[#544e4e]"
                                >
                                    {item.link}
                                </a>

                                <ArrowRight className="text-blue-600 transition-transform duration-300 group-hover:translate-x-2" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}