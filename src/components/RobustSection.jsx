"use client";

export default function RobustSection() {
    return (
        <section className="w-full bg-white py-20 px-6 md:px-12">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

                {/* LEFT CONTENT */}
                <div>
                    <h4 className="text-sm font-semibold tracking-widest text-gray-500 uppercase mb-4">
                        Robust and Reproducible
                    </h4>

                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-snug">
                        Results you can trust
                    </h2>

                    <p className="text-gray-600 mb-6 text-lg">
                        Omics Playground uses best-in-class methods and algorithms for each
                        analysis step, ensuring robust and reproducible results.
                    </p>

                    {/* STAT */}
                    <div className="mb-8">
                        <h3 className="text-5xl font-bold text-blue-600">76%</h3>
                        <p className="text-gray-600 mt-2">
                            in Decision Confidence Index
                        </p>
                    </div>

                    {/* TESTIMONIAL */}
                    <div className="bg-gray-50 p-6 rounded-xl border">
                        <p className="text-gray-700 italic mb-4">
                            “We tried different solutions and found the BigOmics platform
                            provided the best and most trustworthy results.”
                        </p>

                        <div className="flex items-center gap-4">
                            <img
                                src="/logos/valerio.webp" // add this in public/logos
                                alt="Valerio Therapeutics Logo"
                                className="h-10 w-auto object-contain"
                            />
                            <div>
                                <p className="font-semibold text-gray-900">
                                    Dr. Vlada Zakharova
                                </p>
                                <p className="text-sm text-gray-500">
                                    Senior Scientist, Valerio Therapeutics
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* RIGHT VIDEO */}
                <div className="w-full">
                    <div className="relative w-full h-0 pb-[56.25%] rounded-xl overflow-hidden shadow-lg">
                        <video
                            src="/videos/robust.mp4"
                            className="absolute top-0 left-0 w-full h-full object-cover"
                            autoPlay
                            loop
                            muted
                            playsInline
                            preload="metadata"
                        />
                    </div>
                </div>

            </div>
        </section>
    );
}