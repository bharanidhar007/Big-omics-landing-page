"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

export default function TrustedBy() {
    const logos = [
        { name: "Lübeck", src: "/logos/lubeck.webp", url: "https://www.uni-luebeck.de" },
        { name: "AbbVie", src: "/logos/abbvie.webp", url: "https://www.abbvie.com" },
        { name: "Acuitas", src: "/logos/acuitas.webp", url: "https://acuitastx.com" },
        { name: "Antwerp", src: "/logos/antwerp.webp", url: "https://www.uantwerpen.be" },
        { name: "Harvard", src: "/logos/harvard.webp", url: "https://hms.harvard.edu" },
        { name: "Indiana", src: "/logos/indiana.webp", url: "https://medicine.iu.edu" },
        { name: "IRB", src: "/logos/irb.webp", url: "https://www.irb.usi.ch" },
        { name: "UCD", src: "/logos/ucd.webp", url: "https://www.ucd.ie" },
        { name: "Merck", src: "/logos/merck.webp", url: "https://www.merckgroup.com" },
        { name: "NCCR", src: "/logos/nccr.webp", url: "https://ncc.re.kr" },
        { name: "Oxford", src: "/logos/oxford.webp", url: "https://www.ox.ac.uk" },
        { name: "Parabilis", src: "/logos/parabilis.webp", url: "https://parabilismed.com" },
        { name: "Sanofi", src: "/logos/sanofi.webp", url: "https://www.sanofi.com" },
        { name: "UAMS", src: "/logos/uams.webp", url: "https://uams.edu" },
        { name: "VUB", src: "/logos/vub.webp", url: "https://www.vub.be" },
        { name: "Fribourg", src: "/logos/fribourg.webp", url: "https://www.unifr.ch" },
        { name: "Vertex", src: "/logos/vertex.webp", url: "https://www.vrtx.com" },
    ];

    return (
        <section className="w-full py-24 bg-white">
            <div className="max-w-7xl mx-auto px-6 text-center">

                <p className="text-xs tracking-[0.25em] text-gray-500 mb-3">
                    TRUSTED BY
                </p>

                <h2 className="text-lg md:text-xl text-gray-700 mb-14">
                    Over 50 biotech and pharma companies and institutions worldwide
                </h2>

                {/* Wrapper to position arrows OUTSIDE */}
                <div className="relative px-12">

                    <Swiper
                        modules={[Navigation, Autoplay]}
                        spaceBetween={60}
                        slidesPerView={5}
                        slidesPerGroup={2}
                        loop={true}

                        speed={1200} // 🔥 smooth transition (momentum feel)

                        autoplay={{
                            delay: 2000,              // continuous motion
                            disableOnInteraction: false,
                            pauseOnMouseEnter: true,
                        }}

                        navigation={{
                            nextEl: ".custom-next",
                            prevEl: ".custom-prev",
                        }}

                        allowTouchMove={true}   // ✅ drag enabled

                        breakpoints={{
                            320: { slidesPerView: 2 },
                            640: { slidesPerView: 3 },
                            1024: { slidesPerView: 5 },
                        }}
                    >
                        {logos.map((logo, i) => (
                            <SwiperSlide key={i}>
                                <a
                                    href={logo.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center justify-center"
                                >
                                    <Image
                                        src={logo.src}
                                        alt={logo.name}
                                        width={180}
                                        height={80}
                                        className="object-contain h-16 w-auto opacity-90 hover:opacity-100 hover:scale-105 transition duration-300"
                                    />
                                </a>
                            </SwiperSlide>
                        ))}
                    </Swiper>

                    {/* LEFT ARROW */}
                    <button className="custom-prev absolute left-0 top-1/2 -translate-y-1/2 bg-white shadow-md rounded-full w-10 h-10 flex items-center justify-center text-gray-500 hover:text-gray-800 transition z-20">
                        ‹
                    </button>

                    {/* RIGHT ARROW */}
                    <button className="custom-next absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow-md rounded-full w-10 h-10 flex items-center justify-center text-gray-500 hover:text-gray-800 transition z-20">
                        ›
                    </button>

                </div>
            </div>
        </section>
    );
}