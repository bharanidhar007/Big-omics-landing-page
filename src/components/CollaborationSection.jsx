"use client";

export default function CollaborationSection() {
    return (
        <section className="w-full bg-white py-20 px-6 md:px-12">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

                {/* LEFT CONTENT */}
                <div>
                    <h4 className="text-sm font-semibold tracking-widest text-gray-500 uppercase mb-4">
                        Efficient and Collaborative
                    </h4>

                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-snug">
                        Fast and interactive collaboration
                    </h2>

                    <p className="text-gray-600 mb-6 text-lg">
                        Ideal for both biologists and bioinformaticians.
                    </p>

                    {/* STAT */}
                    <div className="mb-8">
                        <h3 className="text-5xl font-bold text-blue-600">75%</h3>
                        <p className="text-gray-600 mt-2">
                            increase in collaboration effectiveness
                        </p>
                    </div>

                    {/* TESTIMONIAL */}
                    <div className="bg-gray-50 p-6 rounded-xl border">
                        <p className="text-gray-700 italic mb-4">
                            “The advantage of Omics Playground is not only that it speeds up the analysis of the data, but it also shows up later when additional requests for data analysis of the same data sets come from the researchers. Without the software, this would cost me a lot of time again, but with the platform I can do it easily and quickly.”
                        </p>

                        <div className="flex items-center gap-4">
                            <img
                                src="/logos/irb.webp"
                                alt="IRB Logo"
                                className="h-10 w-auto object-contain"
                            />
                            <div>
                                <p className="font-semibold text-gray-900">Simone Moro</p>
                                <p className="text-sm text-gray-500">
                                    Bioinformatician, IRB
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* RIGHT VIDEO */}
                <div className="w-full">
                    <div className="relative w-full h-0 pb-[56.25%] rounded-xl overflow-hidden shadow-lg">

                        <video
                            src="/videos/collaboration.mp4"
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
