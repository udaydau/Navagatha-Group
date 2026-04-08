"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { ClientMotionWrapper } from "@/components/ClientMotionWrapper";
import { WaterBackground } from "@/components/WaterBackground";

const slides = [
  {
    eyebrow: "Global Maritime Partner",
    titleTop: "NAVAGATHA MERCANTILE",
    titleBottom: "FLEET MANAGEMENT PVT. LTD.",
    subtitle: "Premier Ship Management and Crewing Excellence",
    badge: "RPSL-MUM-503"
  },
  {
    eyebrow: "Operational Excellence",
    titleTop: "SAFE • COMPLIANT •",
    titleBottom: "ALWAYS ON TIME",
    subtitle: "Technical, Crew, and Commercial Management under one roof",
    badge: "DG Shipping Licensed"
  },
  {
    eyebrow: "Worldwide Coverage",
    titleTop: "GLOBAL OPERATIONS",
    titleBottom: "LOCAL EXPERTISE",
    subtitle: "Supporting owners and managers across international ports",
    badge: "ISO Certified"
  }
];

export function HeroSlider() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % slides.length);
    }, 5000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="relative h-screen min-h-[720px] flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0B1C3E] via-[#1a3a5c] to-[#0d2847] z-0"></div>
      <div className="absolute inset-0 z-[1]">
        <Image
          src="/container-ship.png"
          alt="Container Ship"
          fill
          className="object-cover opacity-20 mix-blend-overlay"
          priority
        />
      </div>
      <WaterBackground />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0B1C3E]/85 via-transparent to-[#0B1C3E]/35 z-[1]"></div>

      <div className="container mx-auto px-6 relative z-10">
        <ClientMotionWrapper
          key={index}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="text-center max-w-6xl mx-auto">
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-white/15 bg-white/5 backdrop-blur-md text-white/80 text-xs md:text-sm tracking-[0.3em] uppercase mb-6">
              {slides[index].eyebrow}
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-[1.15] tracking-tight">
              <span className="block mb-1 bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent drop-shadow-2xl">
                {slides[index].titleTop}
              </span>
              <span className="block bg-gradient-to-r from-secondary via-yellow-300 to-secondary bg-clip-text text-transparent animate-gradient-x drop-shadow-2xl">
                {slides[index].titleBottom}
              </span>
              <span className="block mt-4 text-lg md:text-xl font-bold tracking-[0.2em] text-white/90">
                <span className="px-4 py-1.5 border border-white/20 rounded-full bg-white/5 backdrop-blur-sm">
                  {slides[index].badge}
                </span>
              </span>
            </h1>

            <p className="text-lg md:text-xl lg:text-2xl text-gray-100 mb-10 max-w-4xl mx-auto leading-relaxed font-light tracking-wide">
              {slides[index].subtitle}
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-5 mb-12">
              <Link
                href="/careers"
                className="group relative px-10 py-4 bg-gradient-to-r from-secondary via-yellow-400 to-secondary bg-size-200 bg-pos-0 hover:bg-pos-100 text-primary font-bold text-base rounded-full transition-all duration-500 shadow-2xl shadow-secondary/30 hover:shadow-secondary/50 hover:scale-105 active:scale-95 flex items-center justify-center gap-3 overflow-hidden"
              >
                <span className="relative z-10">Find Your Career at Sea</span>
                <ArrowRight size={20} className="relative z-10 group-hover:translate-x-2 transition-transform duration-300" />
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-300 to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </Link>

              <Link
                href="/#services"
                className="group px-10 py-4 bg-white/10 backdrop-blur-xl text-white border-2 border-white/30 font-bold text-base rounded-full hover:bg-white/20 hover:border-white/50 transition-all duration-300 shadow-xl hover:shadow-2xl hover:scale-105 active:scale-95 flex items-center justify-center gap-3"
              >
                <span>Explore Our Services</span>
                <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform duration-300" />
              </Link>
            </div>

            <div className="flex flex-wrap justify-center gap-6 text-white/80">
              <div className="flex items-center gap-2">
                <CheckCircle2 size={18} className="text-secondary" />
                <span className="text-sm font-medium">DG Shipping Licensed</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={18} className="text-secondary" />
                <span className="text-sm font-medium">ISO Certified</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={18} className="text-[#D4AF37]" />
                <span className="text-sm font-medium">Global Operations</span>
              </div>
            </div>

            <div className="mt-10 flex items-center justify-center gap-3">
              {slides.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setIndex(i)}
                  className={`h-2.5 w-10 rounded-full transition-all ${
                    i === index ? "bg-secondary" : "bg-white/30 hover:bg-white/50"
                  }`}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </ClientMotionWrapper>
      </div>
    </section>
  );
}
