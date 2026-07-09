"use client";

export default function BenefitsSection() {
    const benefits = [
        {
            value: "82%",
            title: "faster analysis",
        },
        {
            value: "92%",
            title: "time saved in data handover",
        },
        {
            value: "8x",
            title: "ROI",
        },
    ];

    return (
        <section className="w-full bg-gray-50 py-20 px-6 md:px-12">
            <div className="max-w-7xl mx-auto">

                {/* Heading */}
                <h2 className="text-3xl md:text-4xl font-semibold text-blue-900 mb-12">
                    Your Benefits with Omics Playground
                </h2>

                {/* Cards */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {benefits.map((item, index) => (
                        <div
                            key={index}
                            className="
                bg-white rounded-2xl border border-gray-100
                p-10 text-center
                shadow-sm
                transform
                transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)]
                hover:-translate-y-3 hover:shadow-2xl hover:scale-[1.03]
                cursor-pointer
              "
                        >
                            {/* Value */}
                            <div className="text-5xl md:text-6xl font-bold text-blue-900 mb-4">
                                {item.value}
                            </div>

                            {/* Text */}
                            <p className="text-lg text-blue-800">
                                {item.title}
                            </p>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}