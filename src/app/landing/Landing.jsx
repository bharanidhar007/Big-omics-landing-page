"use client";
import { useEffect } from "react";
import { initLenis } from "../../engine/lenis";

import HeroScene from "./scenes/HeroScene";
import Navbar from "../../components/Navbar";
import TrustedBy from "../../components/TrustedBy";
import CollaborationSection from "../../components/CollaborationSection";
import RobustSection from "../../components/RobustSection";
import OmicsFeaturesSection from "../../components/OmicsFeaturesSection";
import BenefitsSection from "../../components/BenefitsSection";
import ReferencesSection from "../../components/ReferencesSection";
import CTASection from "../../components/CTASection";
import Footer from "../../components/Footer";


export default function Landing() {
  useEffect(() => {
    initLenis();
  }, []);

  return (
    <main>
      <Navbar />

      <HeroScene />

      {/* 👇 ADD IT HERE */}
      <div className="relative z-10 bg-white">
        <TrustedBy />
      </div>
      <CollaborationSection />
      <RobustSection />
      <OmicsFeaturesSection />

      <BenefitsSection />
      <ReferencesSection />
      <CTASection />
      <Footer />

    </main>
  );
}