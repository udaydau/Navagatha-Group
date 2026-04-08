import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { AnimatedRadar } from "@/components/AnimatedRadar";

export function HeroMaritime() {
  return (
    <section className="ultra-hero relative h-screen min-h-[780px] flex items-center overflow-hidden">
      <div className="ultra-hero__bg" aria-hidden="true" />
      <div className="ultra-hero__aurora" aria-hidden="true" />
      <div className="ultra-hero__grid" aria-hidden="true" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 items-center">
          <div className="ultra-hero__left">
            <h1 className="ultra-hero__title">
              <span className="ultra-hero__brand">NAVAGATHA</span>
              <span className="ultra-hero__brand-sub">MERCANTILE FLEET MANAGEMENT</span>
            </h1>
            <div className="ultra-hero__meta">
              <span className="ultra-hero__pill">RPSL-MUM-503</span>
              <span className="ultra-hero__meta-text">DG Shipping Licensed - ISO Certified</span>
            </div>
            <p className="ultra-hero__lead">
              Premier Ship Management and Crewing Excellence with reliable global operations and safety-first performance.
            </p>
            <div className="ultra-hero__actions">
              <Link href="/careers" className="ultra-hero__cta ultra-hero__cta--primary">
                Find Your Career at Sea
                <ArrowRight size={18} />
              </Link>
              <Link href="/#services" className="ultra-hero__cta ultra-hero__cta--ghost">
                Explore Our Services
                <ArrowRight size={18} />
              </Link>
            </div>
          </div>

          <div className="ultra-hero__right">
            <AnimatedRadar />
          </div>

        </div>
      </div>
    </section>
  );
}
