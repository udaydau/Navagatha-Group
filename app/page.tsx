import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { getServiceSchema, getFAQPageSchema } from "@/lib/schema";
import { getCaseStudies } from "@/lib/case-studies";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { ServicesSection } from "@/components/ServicesSection";
import { ClientMotionWrapper } from "@/components/ClientMotionWrapper";
import { WaterBackground } from "@/components/WaterBackground";

const faqs = [
  {
    question: "What is Navagatha Mercantile's primary focus?",
    answer: "Our core services are Ship Management, Technical Management, and Crew Management, serving the marine and offshore industry globally."
  },
  {
    question: "Are you authorized by DG Shipping?",
    answer: "Yes, we hold Indian shipping ministry license no MUM-RPSL-503."
  },
  {
    question: "What types of vessels do you manage?",
    answer: "We have vessels in manning including General Cargo, Tankers, Containers, and Bulk Carriers."
  },
  {
    question: "What other industries is Navagatha involved in?",
    answer: "Besides shipping, we are involved in Chartering, Academics, and Import/Export."
  }
];

const fadeInProps = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.8 }
};

export default async function Home() {
  const studies = await getCaseStudies();
  const featuredStudies = studies.slice(0, 3);

  // Generate schemas for services
  const services = [
    { name: "Technical Management", category: "Ship Management", description: "Complete technical oversight, maintenance, and dry-docking support." },
    { name: "Crew Management", category: "Manning", description: "Recruitment, training, and placement of qualified seafarers." },
    { name: "Commercial Management", category: "Logistics", description: "Chartering, operations, and post-fixture management." },
    { name: "Import / Export", category: "Logistics", description: "Global freight forwarding and cargo logistics solutions." }
  ];

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-secondary selection:text-primary">
      {/* Service Schemas */}
      {services.map((s, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(getServiceSchema(s)) }}
        />
      ))}

      {/* FAQ Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getFAQPageSchema(faqs)) }}
      />

      <Header />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center overflow-hidden">
        {/* Enhanced Background with Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0B1C3E] via-[#1a3a5c] to-[#0d2847] z-0"></div>

        {/* Container Ship Background Image */}
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

        {/* Animated Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B1C3E]/80 via-transparent to-[#0B1C3E]/40 z-[1]"></div>

        {/* Decorative Elements */}
        <div className="absolute top-20 right-20 w-72 h-72 bg-secondary/10 rounded-full blur-3xl animate-pulse z-[1]"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl animate-pulse delay-1000 z-[1]"></div>

        <div className="container mx-auto px-6 relative z-10">
          <ClientMotionWrapper
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="text-center max-w-6xl mx-auto">
              {/* Enhanced Title with Gradient Text */}
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-[1.15] tracking-tight">
                <span className="block mb-1 bg-gradient-to-r from-white via-gray-100 to-white bg-clip-text text-transparent drop-shadow-2xl">
                  NAVAGATHA MERCANTILE
                </span>
                <span className="block bg-gradient-to-r from-secondary via-yellow-300 to-secondary bg-clip-text text-transparent animate-gradient-x drop-shadow-2xl">
                  FLEET MANAGEMENT PVT. LTD.
                </span>
                <span className="block mt-4 text-lg md:text-xl font-bold tracking-[0.2em] text-white/90">
                  <span className="px-4 py-1.5 border border-white/20 rounded-full bg-white/5 backdrop-blur-sm">
                    RPSL-MUM-503
                  </span>
                </span>
              </h1>

              {/* Enhanced Subtitle */}
              <p className="text-lg md:text-xl lg:text-2xl text-gray-100 mb-10 max-w-4xl mx-auto leading-relaxed font-light tracking-wide">
                <span className="font-semibold text-white">Premier Ship Management</span> and Crewing Excellence
              </p>

              {/* Modern CTA Buttons */}
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

              {/* Trust Indicators */}
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
            </div>
          </ClientMotionWrapper>
        </div>

        {/* Enhanced Scroll Indicator */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10">
          <div className="flex flex-col items-center gap-2 animate-bounce">
            <span className="text-white/60 text-xs font-semibold tracking-widest uppercase">Scroll Down</span>
            <div className="w-6 h-10 border-2 border-white/40 rounded-full flex justify-center p-1 shadow-lg">
              <div className="w-1.5 h-3 bg-[#D4AF37] rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-white relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 max-w-5xl mx-auto">
            <h2 className="text-[#D4AF37] font-bold tracking-widest uppercase mb-4">About Us</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-[#0B1C3E] mb-2 leading-tight">
              Navagatha Mercantile Fleet Management <span className="text-[#D4AF37]">Overview</span>
            </h3>
            <p className="text-sm font-bold text-gray-400 uppercase tracking-[0.2em] mb-8">
              License No: RPSL-MUM-503
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            <ClientMotionWrapper
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="space-y-6 text-lg text-[#4A5568] leading-relaxed text-justify">
                <p>
                  We Navagatha has more than decade Experience in the shipping industry as a Ship Management and Crewing company in Mumbai India & with Indian shipping ministry license no MUM-RPSL-503. we offer an extensive range of services to ship owners and ship managers, wherever in the world they are located. Covering full management, technical management and crew management, we offer our clients the core support they need to operate and safeguard their vessels and achieve commercial success.
                </p>
                <p>
                  Successful companies are unique and their business models vary. At Navagatha excellence is our priority, Our ability to build and sustain working relationships is supported by an innovative approach, the efficient use of modern technology, and a passionate team of people dedicated to delivering client satisfaction and excellence in all marine services.
                </p>
              </div>
            </ClientMotionWrapper>

            <ClientMotionWrapper
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-[#0B1C3E]/5 p-8 rounded-3xl border border-[#0B1C3E]/10">
                <p className="text-lg text-[#4A5568] leading-relaxed mb-6 font-medium">
                  We Navagatha is in various part of shipping industry as well as:
                </p>
                <div className="flex flex-wrap gap-3 mb-8">
                  {[
                    "Ship Management",
                    "Technical Management",
                    "Crew Management",
                    "Agency Services",
                    "Port Services",
                    "Academics",
                    "Import / Export"
                  ].map((item, i) => (
                    <span key={i} className="px-3 py-1 bg-white border border-[#D4AF37]/30 rounded-full text-xs font-bold text-[#0B1C3E] uppercase shadow-sm">
                      {item}
                    </span>
                  ))}
                </div>
                <p className="text-lg text-[#4A5568] leading-relaxed font-medium">
                  ...are the name of few industries in which we are making huge leaps!
                </p>
              </div>

              <div className="mt-8 aspect-video rounded-2xl overflow-hidden bg-gray-100 relative shadow-xl">
                <Image
                  src="/images/about.png"
                  alt="Navagatha Fleet Management Team"
                  fill
                  className="object-cover"
                />
              </div>
            </ClientMotionWrapper>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-20 bg-background-alt">
        <div className="container mx-auto px-6 text-center">
          <ClientMotionWrapper {...fadeInProps}>
            <blockquote className="text-3xl md:text-5xl font-serif italic text-[#0B1C3E]/80 leading-normal max-w-4xl mx-auto">
              &ldquo;Total Quality Management is not a destination, but a journey towards improvement&rdquo;
            </blockquote>
          </ClientMotionWrapper>
        </div>
      </section>

      {/* Services Section */}
      <section id="services">
        <ServicesSection />
      </section>

      {/* Stats Section */}
      <section className="py-24 bg-[#0B1C3E] text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 skew-x-12 translate-x-1/2" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="grid md:grid-cols-3 gap-12 text-center">
            <div className="space-y-4">
              <h4 className="text-6xl font-extrabold text-secondary">3000</h4>
              <p className="text-sm font-bold uppercase tracking-widest opacity-80">TESTIMONIAL</p>
              <p className="text-xs opacity-60">CREW HAS BEEN JOINED</p>
            </div>
            <div className="space-y-4">
              <h4 className="text-6xl font-extrabold text-secondary">138</h4>
              <p className="text-sm font-bold uppercase tracking-widest opacity-80">SEA ROUT</p>
              <p className="text-xs opacity-60">SHENGAN , USA, South East Asia and Gulf Countries</p>
            </div>
            <div className="space-y-4">
              <h4 className="text-6xl font-extrabold text-secondary">34</h4>
              <p className="text-sm font-bold uppercase tracking-widest opacity-80">VESSEL WE HAVE IN MANNING</p>
              <p className="text-xs opacity-60">VESSEL TYPE – GENERAL CARGO, TANKER, CONTAINER, BULK CARRIER</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-6 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-8">
            <h2 className="text-secondary font-serif italic text-2xl mb-2">Sailors</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-primary mb-4">Meet our team</h3>
            <p className="text-foreground-muted max-w-2xl mx-auto">
              We have core team member dedicated and honest for work. We are available 24/7 at any time by mail or chats to assist you
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { role: "TECHNICAL MANAGEMENT", email: "capt.rajesh@navagathagroup.com", img: "/images/team/team_technical_management_vessel_engine.png" },
              { role: "FLEET PERSONAL MANAGER", email: "info@navagathagroup.com", img: "/images/team/team_fleet_manager_office.png" },
              { role: "CREW MANAGER", email: "cv.navagatha@gmail.com", img: "/images/team/team_crew_officer_deck.png" },
              { role: "IMPORT / EXPORT", email: "trade@navagathagroup.com", img: "/images/team/team_import_export_logistics_port.png" },
            ].map((member, idx) => (
              <ClientMotionWrapper key={idx} {...fadeInProps} transition={{ delay: idx * 0.1 }} className="text-center group">
                <div className="relative w-full aspect-square mb-6 rounded-[40px] border-4 border-[#d4af37]/30 p-2 group-hover:border-[#d4af37] transition-all">
                  <div className="w-full h-full rounded-[30px] bg-gray-100 overflow-hidden relative">
                    <Image
                      src={member.img}
                      alt={member.role}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>
                </div>
                <h4 className="text-lg font-bold text-[#d4af37] uppercase mb-2">{member.role}</h4>
                <a href={`mailto:${member.email}`} className="text-primary font-medium hover:text-secondary transition-colors text-sm break-all">
                  {member.email}
                </a>
              </ClientMotionWrapper>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="bg-[#0B1C3E] rounded-[40px] p-12 md:p-24 text-center text-white relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-[80px] -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-secondary/20 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2" />

            <div className="relative z-10 max-w-3xl mx-auto">
              <h2 className="text-4xl md:text-6xl font-bold mb-8">Ready to work with us?</h2>
              <p className="text-xl opacity-80 mb-12">
                Partner with Navagatha Mercantile for world-class technical and crew management solutions.
              </p>
              <Link
                href="/contact"
                className="px-12 py-6 bg-secondary text-primary font-extrabold text-xl rounded-full hover:bg-white transition-all shadow-xl hover:shadow-secondary/20 inline-flex items-center gap-3"
              >
                Contact Our Team <ArrowRight size={24} />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-secondary font-bold tracking-widest uppercase mb-2">Knowledge Base</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-primary mb-6">Frequently Asked Questions</h3>
          </div>
          <div className="max-w-4xl mx-auto grid gap-6">
            {faqs.map((faq, idx) => (
              <ClientMotionWrapper
                key={idx}
                {...fadeInProps}
                className="p-8 rounded-2xl bg-background-alt border border-gray-100 hover:border-secondary transition-all"
              >
                <h4 className="text-xl font-bold text-primary mb-3">{faq.question}</h4>
                <p className="text-foreground-muted leading-relaxed">{faq.answer}</p>
              </ClientMotionWrapper>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
