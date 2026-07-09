"use client";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import Link from "next/link";

export default function HeroScene() {
  const videoRefs = useRef([]);
  const indexRef = useRef(0);
  const hasCompletedFirstLoop = useRef(false);

  const textRef = useRef(null);
  const buttonsRef = useRef(null);

  const videos = [
    "/videos/hero1.mp4",
    "/videos/hero2.mp4",
    "/videos/hero3.mp4",
    "/videos/hero4.mp4",
    "/videos/hero5.mp4",
    "/videos/hero6.mp4",
    "/videos/hero7.mp4",
  ];

  useEffect(() => {
    const vids = videoRefs.current;

    if (!vids || vids.length === 0) return;

    // reset all videos safely
    vids.forEach((v) => {
      if (!v) return;
      v.pause();
      try {
        v.currentTime = 0;
      } catch { }
    });

    // play first video
    vids[0]?.play().catch(() => { });

    const handleEnded = () => {
      let current = indexRef.current;
      let next;

      // 🎯 First full run
      if (!hasCompletedFirstLoop.current) {
        next = current + 1;

        if (next >= videos.length) {
          hasCompletedFirstLoop.current = true;
          next = 2; // loop starts from hero3
        }
      } else {
        // 🔁 loop from hero3 → hero7
        next = current + 1;
        if (next >= videos.length) {
          next = 2;
        }
      }

      const currentVideo = vids[current];
      const nextVideo = vids[next];

      if (!currentVideo || !nextVideo) return;

      // play next
      try {
        nextVideo.currentTime = 0;
      } catch { }
      nextVideo.play().catch(() => { });

      // 🎬 smooth crossfade
      gsap.killTweensOf([currentVideo, nextVideo]);

      gsap.to(nextVideo, {
        opacity: 1,
        duration: 0.8,
        ease: "power2.out",
      });

      gsap.to(currentVideo, {
        opacity: 0,
        duration: 0.8,
        ease: "power2.out",
        onComplete: () => {
          currentVideo.pause();
        },
      });

      indexRef.current = next;

      // 🔥 PRELOAD upcoming video (pro optimization)
      const preloadIndex = (next + 1) % videos.length;
      const preloadVideo = vids[preloadIndex];

      if (preloadVideo && preloadVideo.readyState < 2) {
        preloadVideo.load();
      }
    };

    // attach listeners safely
    vids.forEach((video) => {
      if (!video) return;
      video.addEventListener("ended", handleEnded);
    });

    return () => {
      vids.forEach((video) => {
        if (!video) return;
        video.removeEventListener("ended", handleEnded);
      });
    };
  }, []);

  // 🎬 Text animation (unchanged)
  useEffect(() => {
    const tl = gsap.timeline({ delay: 3 });

    tl.fromTo(
      textRef.current,
      { opacity: 0, y: 50, filter: "blur(10px)" },
      {
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
        duration: 1.2,
        ease: "power3.out",
      }
    );

    tl.fromTo(
      buttonsRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: "power3.out",
      },
      "-=0.4"
    );
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">

      {/* 🎥 VIDEOS */}
      {videos.map((src, i) => (
        <video
          key={i}
          ref={(el) => (videoRefs.current[i] = el)}
          src={src}
          muted
          playsInline
          preload={i < 3 ? "auto" : "metadata"} // 🔥 hybrid preload
          className="absolute top-0 left-0 w-full h-full object-cover"
          style={{
            opacity: i === 0 ? 1 : 0,
            zIndex: 0,
            willChange: "opacity",
          }}
        />
      ))}

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 z-10 pointer-events-none" />

      {/* CONTENT */}
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center px-6 mt-16 md:mt-24">

        <div ref={textRef} className="opacity-0">
          <h1 className="text-5xl md:text-6xl font-bold text-white leading-[1.3] md:leading-[1.35]">
            Interactively Visualize and <br />
            Analyze your Omics Data
          </h1>

          <p className="mt-4 text-2xl md:text-3xl text-white/90 font-medium">
            with Omics Playground
          </p>
        </div>

        <div
          ref={buttonsRef}
          className="opacity-0 mt-8 flex gap-4 flex-wrap justify-center"
        >
          <Link
            href="https://bigomics.ch/omics-playground/"
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full font-semibold transition transform hover:scale-105 shadow-[0_0_20px_rgba(37,99,235,0.6)]"
          >
            TRY OMICS PLAYGROUND
          </Link>

          <Link
            href="https://email.bigomics.ch/request-a-demo"
            className="border border-white text-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:text-blue-700 transition transform hover:scale-105"
          >
            REQUEST A DEMO
          </Link>
        </div>

      </div>
    </section>
  );
}